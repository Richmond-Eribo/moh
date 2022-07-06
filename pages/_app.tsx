import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {DemoModal, Footer, Navigation} from 'components'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Navigation />
      <DemoModal />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
