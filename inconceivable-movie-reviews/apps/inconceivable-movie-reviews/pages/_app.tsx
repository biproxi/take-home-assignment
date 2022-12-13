import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import Navbar from '../components/Navbar';
import "../styles/styles.css"

// _app .tsx is where all of the Next.js magic happens.  I can use the 'Head' component to return things like the title of the app, meta data for SEO purposes, and other data that is commonly found in the head of the app.  The 'main' div of this app houses the 'Navbar' component that is rendered on each page of the app.  The 'Component' components is how each of our pages is rendered in the app following the navbar.
function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Yay-Nay Movie Reviews</title>
      </Head>
      <main className="app">
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>
        <div className="app-body">
          <Component {...pageProps} />
        </div>
      </main>
    </>
  );
}

export default CustomApp;
