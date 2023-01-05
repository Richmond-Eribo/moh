import { getNews, getSingleNews } from "hooks/useGetNews"
import { GetStaticPaths, GetStaticProps } from "next"
import React from "react"
import Image from "next/image"
import { NewsField } from "interfaces/contentfulTypes"
import { MetaTagsWrapper, RichTextWrapper } from "components"
import AnimatedHeading from "components/New Design/Animations/AnimateHeading"
import { MetaTags, PageType, RobotsContent } from "interfaces/metaTagsTypes"
import { concatenateStrings, url } from "utils/metaTags"

type Props = {
  News: NewsField
}

const SingleNews = ({ News }: Props) => {
  const imageUrl = News.thumbnail?.fields.file.url

  // console.log(News.writeUp)
  const { content } = News.writeUp
  const MetaTags: MetaTags = {
    canonical: url,
    description: "",
    image: imageUrl ? `https:${imageUrl}` : `${url}/metaImage.png`,
    robots: concatenateStrings(RobotsContent.index, RobotsContent.follow),
    title: News.title,
    type: PageType.article,
  }

  //console.log(imageUrl);
  return (
    <section className='pt-28'>
      {/* this is a single news post */}
      <MetaTagsWrapper tags={MetaTags} />
      <div>
        <div className=' text-white flex flex-col justify-center w-full lg:h-40 bg-[url("/New/image31.webp")] bg-cover'>
          {/* <h1 className='text-[#fff] font-semibold text-xl container'>
            {News.title}
          </h1> */}
          <AnimatedHeading
            text={News.title}
            ClassNames='text-[#fff] font-semibold text-xl container'
          />
        </div>
        <div>
          <div className='text-center lg:w-[60%] relative lg:h-[35vw] mt-10  mx-auto'>
            {imageUrl ? (
              <Image
                src={`https:${imageUrl}`}
                layout='fill'
                objectFit='cover'
                alt='blog post'
              />
            ) : (
              ""
            )}
          </div>
          <div className='container'>
            {/* {content.map((item: any) => {
              const {content} = item

              return content.length > 0 && <p>{content[0].value}</p>
            })} */}
            <RichTextWrapper RichText={News.writeUp} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleNews

export const getStaticPaths: GetStaticPaths = async () => {
  const News = await getNews(0, 1000)

  const paths = News.map((news) => {
    return {
      params: {
        slug: news.fields.slug,
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const News = await getSingleNews(params!.slug!)

  return {
    props: {
      News: News.fields,
    },
  }
}
