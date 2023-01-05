import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"

import {
  MetaTagsWrapper,
  Philosophy,
  PhcApplication,
  Qoute,
  Resource,
  NewsPreview,
  HeroSlider,
} from "components"

import useGetNews from "hooks/useGetNews"
import defaultMetaTags from "utils/metaTags"
import useGetHomepageSlides from "hooks/getImages"

const Home: NextPage = () => {
  const slides = useGetHomepageSlides("7gTsj0Yt2sRxuODAJKW3sd")

  const NewsFromContentful = useGetNews(0, 5)
  return (
    <div className=''>
      <MetaTagsWrapper tags={defaultMetaTags} />
      {slides.data ? (
        <HeroSlider homepageSlidesUrl={slides.data!} />
      ) : (
        <div className='absolute flex justify-center items-center z-[9999] inset-0 bg-white h-screen  w-screen '>
          <Image
            src='/New/medical-insurance.gif'
            height={80}
            width={80}
            alt='medical insurance gif'
          />
        </div>
      )}

      <Philosophy />
      <PhcApplication />
      <Qoute />
      <Resource />
      {NewsFromContentful && <NewsPreview news={NewsFromContentful.data} />}
    </div>
  )
}

export default Home

{
  /* <Features data={data!} /> */
}
{
  /* <Highlights /> */
}
{
  /* <Application /> */
}
{
  /* <Resources /> */
}
{
  /* <News newsData={NewsFromContentful.data} /> */
}
