import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
class MyDocument extends Document {
  render() {
      return (
          <Html>
              <Head>
                  <link
                      href="https://fonts.googleapis.com/css2?family=Gotu&display=swap"
                      rel="stylesheet"
                  />
              </Head>
              <body>
                  
                  <Main />
                  <NextScript />
              </body>
          </Html>
      );
  }
}


export default MyDocument