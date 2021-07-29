import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import theme from '../styles/theme';
import Layout from '../components/Layout';
import store from '../store/index';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
