import { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to movie-app!</title>
      </Head>
      <Layout>
        <main >
          <Component {...pageProps} />
        </main>
      </Layout>
    </>
  );
}

export default CustomApp;
