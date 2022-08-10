import { useEffect, useState } from "react";
import { singletonHook } from "react-singleton-hook";

import { useRouter } from "next/router";

const useProcessLoggedInImpl = () => {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
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
  }, [router.query]);
  return loggedIn;
};

export const useProcessLoggedIn = singletonHook(null, useProcessLoggedInImpl);
