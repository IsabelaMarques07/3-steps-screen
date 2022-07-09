import '../styles/globals.css'
import React from 'react'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      <title>Create Next App</title>
      <link rel="stylesheet" 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" />
      </Head>
      <Component {...pageProps} />
    </>
    )
}
export default MyApp
