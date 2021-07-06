// import App from 'next/app'
import * as React from 'react';
import { CacheProvider } from '@emotion/react';
import { cache } from '@emotion/css';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from 'clients/apollo-client';

// see: https://nextjs.org/docs/advanced-features/custom-app
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <CacheProvider value={cache}>
          <Component {...pageProps} />
      </CacheProvider>
    </ApolloProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async appContext => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext)

//   return { ...appProps }
// }

export default MyApp;
