import "@/styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";

import { useEffect } from "react";

import type { AppProps } from "next/app";

import { RouterLoaded } from "@/components/common/RouterLoaded";
import { GraphQLProvider } from "@/context/GraphQLProvider";
import { initPackages } from "@/utils/init";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initPackages();
  }, []);
  return (
    <GraphQLProvider>
      <div className="min-h-[100vh] min-w-[100vw] bg-bg">
        <Component {...pageProps} />
      </div>
    </GraphQLProvider>
  );
}

export default MyApp;
