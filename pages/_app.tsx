import "../styles/globals.css"
import type { AppProps } from "next/app"
import { DemoModal, Footer, Navigation } from "components"
import HelpLine from "components/OldDesign/HelpLine"
import { QueryClient, QueryClientProvider } from "react-query"
import Layout from "components/New Design/Layout"

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-[#F2F2F2]'>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <>
            {/* <Navigation /> */}
            {/* <DemoModal /> */}
            <Component {...pageProps} />
            <HelpLine />

            {/* <Footer /> */}
          </>
        </Layout>
      </QueryClientProvider>
    </div>
  )
}

export default MyApp
