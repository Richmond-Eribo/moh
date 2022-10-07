import { getNews, getSingleNews } from "hooks/useGetNews"
import { GetStaticPaths, GetStaticProps } from "next"
import React from "react"
import Image from "next/image"
import { NewsField } from "interfaces/contentfulTypes"
import { MetaTagsWrapper, PageHeader, RichTextWrapper } from "components"
import { getMda, getSingleMda } from "hooks/useGetMDAs"
import AnimatedHeading from "components/New Design/Animations/AnimateHeading"
import { MetaTags, PageType, RobotsContent } from "interfaces/metaTagsTypes"
import { concatenateStrings, url } from "utils/metaTags"

type Props = {
  Mda: NewsField
}

const Mda = ({ Mda }: Props) => {
  const imageUrl = Mda.thumbnail?.fields.file.url

  const MetaTags: MetaTags = {
    canonical: url,
    description: "",
    image: imageUrl ? `https:${imageUrl}` : `${url}/metaImage.png`,
    robots: concatenateStrings(RobotsContent.index, RobotsContent.follow),
    title: Mda.title,
    type: PageType.article,
  }
  // console.log(Mda)
  // const { content } = Mda.writeUp

  //console.log(imageUrl);
  return (
    <section className='pt-28'>
      <MetaTagsWrapper tags={MetaTags} />
      {/* this is a single news post */}
      <div>
        <div className=' text-white flex flex-col justify-center w-full lg:h-40 bg-[url("/New/image31.png")] bg-cover'>
          {/* <h1 className='text-[#fff] font-semibold text-xl  container'>
            {Mda.title}
          </h1> */}
          <AnimatedHeading
            text={Mda.title}
            ClassNames='text-[#fff] font-semibold text-xl  container'
          />
        </div>
        <div>
          {imageUrl ? (
            <div className='text-center bg-slate-500 lg:w-[60%] relative lg:h-[35vw] mt-10  mx-auto'>
              <Image
                src={`https:${imageUrl}`}
                layout='fill'
                objectFit='cover'
                alt='blog post'
              />
            </div>
          ) : (
            ""
          )}
          <div className='container mx-auto px-10'>
            {/* {content.map((item: any) => {
              const {content} = item

              return content.length > 0 && <p>{content[0].value}</p>
            })} */}
            <RichTextWrapper RichText={Mda.writeUp} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mda
export const getStaticPaths: GetStaticPaths = async () => {
  const Mda = await getMda(0, 1000)

  const paths = Mda.map((news) => {
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
  const Mda = await getSingleMda(params!.slug!)

  return {
    props: {
      Mda: Mda.fields,
    },
  }
}
