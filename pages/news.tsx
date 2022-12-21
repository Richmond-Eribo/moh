import { LargeNewsCard, MetaTagsWrapper, PageHeader } from "components"
import AnimatedHeading from "components/New Design/Animations/AnimateHeading"
import useGetNews from "hooks/useGetNews"
// import Image from "next/image"
// import Link from "next/link"
import { NewsPageMetaTags } from "utils/metaTags"
const News = () => {
  const NewsFromContentful = useGetNews()
  // console.log(NewsFromContentful.data)
  return (
    <section className='pt-28'>
      <MetaTagsWrapper tags={NewsPageMetaTags} />
      <div className=' text-white flex flex-col justify-center w-full lg:h-40 bg-[url("/New/image31.png")] bg-cover'>
        {/* <h1 className=''> */}
        <AnimatedHeading
          text='news'
          ClassNames='text-[#fff] font-semibold text-3xl uppercase py-8 container'
        />
        {/* news */}
        {/* </h1> */}
      </div>
      <div className='grid container mt-10 lg:mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-7 lg:gap-y-10 gap-x-14 pb-11 place-items-center '>
        {NewsFromContentful.data &&
          NewsFromContentful.data.map(
            (item, index) => {
              // console.log(item)
              return <LargeNewsCard key={index} singleNews={item} />
            }
            // (
            //
            // )
          )}
      </div>
      {/* <div className='text-center'>
        <button className='underline w-32 underline-offset-4 text-lg font-bold text-[#005410] py-2 px-4 rounded-sm capitalize'>
          view more
        </button>
      </div> */}
    </section>
  )
}

export default News
