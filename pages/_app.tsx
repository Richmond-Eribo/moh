import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {DemoModal, Footer, Navigation} from 'components'
import {QueryClient, QueryClientProvider} from 'react-query'

const queryClient = new QueryClient()

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navigation />
        {/* <DemoModal /> */}
        <Component {...pageProps} />
        <Footer />
      </QueryClientProvider>
    </>
  )
}

export default MyApp
