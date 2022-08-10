import { createContext, useContext, useEffect, useState } from "react";

import { useRouter } from "next/router";

// hacked up context
export const AuthContext = createContext({ loggedIn: false });
export const useAuth = () => useContext(AuthContext);

export const useProcessLoggedIn = () => {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (!router?.isReady) return;
    if (router.query.loggedIn === "true") {
      setLoggedIn(true);
      router.replace(
        {
          pathname: "/",
          query: {},
        },
        undefined,
        {
          shallow: true,
        }
      );
    }
  }, [router?.query, router]);
  return loggedIn;
};
