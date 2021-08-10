import { Provider } from 'react-redux';
import App from 'next/app';
import store from '../store';

type AppProps<P = any> = {
  Component: P;
  ctx: P;
};

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: AppProps) {
    let pageProps = { query: String };
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return(
      <Provider store = {store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}


export default MyApp;