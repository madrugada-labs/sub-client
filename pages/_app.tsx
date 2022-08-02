import "@/styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-[100vh] min-w-[100vw]">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
