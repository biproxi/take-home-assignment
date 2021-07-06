import Document, { Head, Main, NextScript, Html } from 'next/document'
import { extractCritical } from '@emotion/server'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const page = renderPage()
    const styles = extractCritical(page.html)
    return { ...page, ...styles }
  }

  render() {
    return (
      <Html>
        <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Archivo"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
