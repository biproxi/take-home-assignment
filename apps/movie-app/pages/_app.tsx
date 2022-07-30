import { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/layout/layout';
import 'semantic-ui-css/semantic.min.css';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to movie-app!</title>
      </Head>
      <Layout>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </Layout>
    </>
  );
}

export default CustomApp;
