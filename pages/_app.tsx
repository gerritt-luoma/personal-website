import '../styles/globals.css'
import Navbar from '@components/Navbar'
import Head from 'next/head'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo-g.jpg"/>
      </Head>
      <Navbar/>
      <main className='body'>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
