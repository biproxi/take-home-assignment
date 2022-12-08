import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import '../styles/styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Inconceivable Movie Reviews</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
