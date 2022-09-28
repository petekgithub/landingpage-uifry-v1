import '../styles/globals.scss';
import '../../uifry/src/Common/styles/main.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    // <Component{...pageProps} />
    <>
      <Head>
        <title>Uifry - Landing Page</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link 
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;600&display=swap" 
          rel="stylesheet" /> 
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
