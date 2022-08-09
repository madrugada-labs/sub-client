import { useEffect, useState } from "react";

import { useRouter } from "next/router";

export const useProcessLoggedIn = () => {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);
  console.log(router.query);
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
