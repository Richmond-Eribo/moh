import {getNews, getSingleNews} from 'hooks/useGetNews'
import {GetStaticPaths, GetStaticProps} from 'next'
import React from 'react'

type Props = {
  [key: string]: any
}

const SingleNews = ({News}: Props) => {
  return (
    <section>
      {/* this is a single news post */}
      <>{console.log('single news post:', News)}</>

      <div className='bg-[#005410]'>
        <h1 className='text-[#fff] font-semibold text-3xl uppercase py-8 container'>
          News titlte
        </h1>
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
