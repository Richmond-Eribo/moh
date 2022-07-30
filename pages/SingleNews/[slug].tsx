import {getNews, getSingleNews} from 'hooks/useGetNews'
import {GetStaticPaths, GetStaticProps} from 'next'
import React from 'react'
import Image from 'next/image'
import {NewsField} from 'interfaces/contentfulTypes'
import {RichTextWrapper} from 'components'

type Props = {
  News: NewsField
}

const SingleNews = ({News}: Props) => {
  const imageUrl = News.thumbnail?.fields.file.url

  // console.log(News.writeUp)
  const {content} = News.writeUp

  //console.log(imageUrl);
  return (
    <section>
      {/* this is a single news post */}
      <div className='c'>
        <div className='bg-[#005410]'>
          <h1 className='text-[#fff] font-semibold text-xl  py-8 container'>
            {News.title}
          </h1>
        </div>
        <div>
          <div className='text-center mt-10'>
            {imageUrl ? (
              <Image
                src={`https:${imageUrl}`}
                height={400}
                width={400}
                alt='blog post'
              />
            ) : (
              ''
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

  const paths = News.map(news => {
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

export const getStaticProps: GetStaticProps = async ({params}) => {
  const News = await getSingleNews(params!.slug!)

  return {
    props: {
      News: News.fields,
    },
  }
}
