import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'

import {News, Features, Hero, Navigation, Highlights} from 'components'

const Home: NextPage = () => {
  return (
    <div className=''>
      <Hero />
      <Features />

      <Highlights />
      <News />
    </div>
  )
}

export default Home
