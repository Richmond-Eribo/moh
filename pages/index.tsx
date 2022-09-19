import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"

import {
  News,
  Features,
  Hero,
  MetaTagsWrapper,
  Application,
  Resources,
} from "components"
import useGetOverview from "hooks/useGetOverview"
import useGetNews from "hooks/useGetNews"
import defaultMetaTags from "utils/metaTags"

const Home: NextPage = () => {
  const { data } = useGetOverview()

  // you can console.log NewsFromContentful.data
  const NewsFromContentful = useGetNews(0, 3)
  return (
    <div className=''>
      <MetaTagsWrapper tags={defaultMetaTags} />
      <Hero />
      <Features data={data!} />
      {/* <Highlights /> */}
      <Application />
      <Resources />
      <News newsData={NewsFromContentful.data} />
    </div>
  )
}

export default Home
