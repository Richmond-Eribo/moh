import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'

import {Footer, News, Features, Hero, Navigation, Highlights} from 'components'

const Home: NextPage = () => {
  return (
    <div className=''>
      <Hero />
      <Features />

      <Highlights />
      <News />

      <Footer />
    </div>
  )
}

export default Home
