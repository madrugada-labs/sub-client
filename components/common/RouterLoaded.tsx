import { FunctionComponent, ReactNode } from "react";

import { useRouter } from "next/router";

export const RouterLoaded: FunctionComponent<{
  fallback?: ReactNode;
  children: ReactNode;
}> = ({ children, fallback }) => {
  const router = useRouter();
  return <>{router.isReady ? children : fallback}</>;
};
