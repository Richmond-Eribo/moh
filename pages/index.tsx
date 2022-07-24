import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'

import {News, Features, Hero, Navigation, Highlights} from 'components'
import useGetOverview from 'hooks/useGetOverview'

const Home: NextPage = () => {
  const {data} = useGetOverview()
  return (
    <div className=''>
      <>{data && console.log(data)}</>
      <Hero />
      <Features />

      {/* <Highlights /> */}
      <News />
    </div>
  )
}

export default Home
