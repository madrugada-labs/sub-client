import "@/styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";

import { useEffect } from "react";

import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

import { Influencer } from "@/constants/app-constants";
import { GraphQLProvider } from "@/context/GraphQLProvider";
import { AuthContext, useProcessLoggedIn } from "@/hooks/useProcessLoggedIn";
import { initPackages } from "@/utils/init";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initPackages();
  }, []);
  const loggedIn = useProcessLoggedIn();
  const title = `Dorse x ${Influencer.NAME}`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Script
        defer
        data-domain={Influencer.DOMAIN}
        src="https://plausible.io/js/plausible.js"
        strategy="lazyOnload"
      />
      <GraphQLProvider>
        <AuthContext.Provider value={{ loggedIn }}>
          <div className="min-h-[100vh] min-w-[100vw] bg-bg">
            <Component {...pageProps} />
          </div>
        </AuthContext.Provider>
      </GraphQLProvider>
    </>
  );
}

export default MyApp;
