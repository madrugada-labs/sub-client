import "@/styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";

import { useEffect } from "react";

import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

import { Influencer } from "@/constants/app-constants";
import { GraphQLProvider } from "@/context/GraphQLProvider";
import { initPackages } from "@/utils/init";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initPackages();
  }, []);
  return (
    <GraphQLProvider>
      <Head>
        <title>Dorse x {Influencer.NAME}</title>
      </Head>
      <Script
        defer
        data-domain={Influencer.DOMAIN}
        src="https://plausible.io/js/plausible.js"
        strategy="lazyOnload"
      />
      <div className="min-h-[100vh] min-w-[100vw] bg-bg">
        <Component {...pageProps} />
      </div>
    </GraphQLProvider>
  );
}

export default MyApp;
