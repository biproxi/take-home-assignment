import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import Navbar from '../components/Navbar';
import "../styles/styles.css"

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Yay-Nay Movie Reviews</title>
      </Head>
      <main className="app" id="popcorn-background">
        <Navbar />
        <div className="app-body">
          <Component {...pageProps} />
        </div>
      </main>
    </>
  );
}

export default CustomApp;
