import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta
            name='keywords'
            content='Leading Digital solutions provider in Nairobi, Kenya'
          />
          <meta
            name='description'
            content='Need top-quality software development, digital marketing, or videography services in Nairobi? Our digital agency has the expertise and experience to help you succeed online. With a track record of success and a commitment to customer satisfaction, we are the team to trust for all of your digital needs. Contact us today to learn more.'
          />
          <meta name='author' content='' />
          <link
            rel='shortcut icon'
            href='/assets/img/favicon-1.png'
            title='Favicon'
            sizes='16x16'
          />

          <link
            rel='stylesheet'
            href='https://fonts.cdnfonts.com/css/oxanium'
          />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;600;700&display=swap'
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

export default MyDocument;
