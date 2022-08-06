import { FunctionComponent, ReactNode } from "react";

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { WebSocketLink } from "@apollo/client/link/ws";
import { createClient } from "graphql-ws";

import fragmentTypes from "@/gql/fragmentTypes.json";
import { ErrorMsg } from "@/gql/graphql";

export const GraphQLProvider: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const wsLink =
    typeof window !== "undefined"
      ? new GraphQLWsLink(
          createClient({
            // webSocketImpl: require("websocket").client,
            url:
              process.env.NEXT_PUBLIC_GRAPHQL_URI ||
              "ws://localhost:8080/graphql",
            connectionParams: {
              // authToken: localStorage.getItem(TOKEN_KEY),
              authToken: "",
            },
          })
        )
      : null;

  const uploadLink = {
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URI || "http://localhost:8080/graphql",
  };

  // const authLink = setContext((_: any, { headers }) => {
  //   // const token = localStorage.getItem('');  // NO AUTH
  //
  //   return {
  //     headers: {
  //       ...headers,
  //       authorization: `Bearer `,
  //     },
  //   };
  // });

  const errorLink = onError(({ graphQLErrors }) => {
    if (graphQLErrors) {
      console.log(graphQLErrors);
      graphQLErrors.forEach(({ message }) => {
        // TODO: handle
        if (message === ErrorMsg.Unauthorized) {
          console.log("unauthenticated");
        }
      });
    }
  });

  // const splitLink = split(
  //   ({ query }) => {
  //     const definition = getMainDefinition(query);
  //     return (
  //       definition.kind === "OperationDefinition" &&
  //       definition.operation === "subscription"
  //     );
  //   },
  //   wsLink,
  //   // @ts-ignore
  //   uploadLink
  // );
  const links = [errorLink, wsLink].filter((v) => !!v);
  const client = new ApolloClient({
    ssrMode: typeof window === "undefined",
    // @ts-ignore
    link: from(links),
    cache: new InMemoryCache({
      typePolicies: {
        Application: {
          fields: {
            status: {
              merge: true,
            },
          },
        },
        Query: {
          fields: {
            conversations: {
              merge: (existing, incoming) => {
                return incoming;
              },
            },
          },
        },
      },
      possibleTypes: fragmentTypes.possibleTypes,
    }),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "cache-and-network",
      },
    },
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
