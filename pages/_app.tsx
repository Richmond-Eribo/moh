import "../styles/globals.css"
import type { AppProps } from "next/app"
import { DemoModal, Footer, Navigation } from "components"
import HelpLine from "components/OldDesign/HelpLine"
import { QueryClient, QueryClientProvider } from "react-query"
import Layout from "components/New Design/Layout"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const pathname = router.pathname
  // const [textColor, setTextColor] = useState("white")

  const routePaths = [
    "/news",
    "/about",
    "/resources",
    "/registration",
    "/singleNews/[slug]",
    "/mda/[slug]",
  ]

  // console.log(pathname, routePaths.indexOf(pathname))
  return (
    <div className='bg-[#F2F2F2] '>
      <QueryClientProvider client={queryClient}>
        <Layout
          navColor={routePaths.indexOf(pathname) !== -1 ? "black" : "white"}
        >
          <>
            <Component {...pageProps} />
            <HelpLine />
          </>
        </Layout>
      </QueryClientProvider>
    </div>
  )
}

export default MyApp
