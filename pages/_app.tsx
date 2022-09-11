import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
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
  ) 
}

export default MyApp
