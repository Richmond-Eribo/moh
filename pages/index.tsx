import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'

import {News, Features, Hero, Navigation, Highlights} from 'components'
import useGetOverview from 'hooks/useGetOverview'
import useGetNews from 'hooks/useGetNews'

const Home: NextPage = () => {
  const {data} = useGetOverview()

  // you can console.log NewsFromContentful.data
  const NewsFromContentful = useGetNews(0, 3)
  // console.log(NewsFromContentful.data);
  return (
    <div className=''>
      {/* <>{data && console.log(data)}</> */}
      {/* this is the fields been returned. */}
      {/* <>{data && data.map(d => console.log(d.fields))}</> */}

      <Hero />
      <Features data={data!} />

      {/* <Highlights /> */}
      <News newsData={NewsFromContentful.data} />
    </div>
  )
}

export default Home
