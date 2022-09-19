import "../styles/globals.css"
import type { AppProps } from "next/app"
import { DemoModal, Footer, Navigation } from "components"
import HelpLine from "components/HelpLine"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navigation />
        {/* <DemoModal /> */}
        <Component {...pageProps} />
        <HelpLine />

        <Footer />
      </QueryClientProvider>
    </>
  )
}

export default MyApp
