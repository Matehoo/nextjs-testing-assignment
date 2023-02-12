import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import { MantineProvider } from "@mantine/core";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Caravany na prenajem</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta property="og:title" content="Caravany na prenajem" key="caravans" />
      </Head>

      <MantineProvider>
        <Component {...pageProps} />;
      </MantineProvider>
    </>
  );
}

export default MyApp;
