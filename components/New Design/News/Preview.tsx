import Link from "next/link"
import LargeCard from "./LargeCard"
import SmallCard from "./SmallCard"

type Props = {
  news: any
}
const Preview = ({ news }: Props) => {
  return (
    <section className=' px-5 py-120half lg:px-400 '>
      <h3 className='pb-120small font-bold  text-4xl text-text '>
        Latest News
      </h3>
      <div className='grid gap-4 grid-cols-1    lg:grid-cols-3 lg:grid-rows-3 '>
        {news?.slice(0, 2).map((news: any, index: any) => (
          <div key={index} className='row-span-3 mx-auto '>
            <LargeCard singleNews={news} />
          </div>
        ))}
        {news?.slice(2, 5).map((news: any, index: any) => (
          // <div  className='hidden lg:block'>
          <SmallCard key={index} singleNews={news} />
          // </div>
        ))}
      </div>
      <Link href='/news'>
        <a className='text-center text-active font-bold underline decoration-2 flex justify-center pt-10 '>
          View More
        </a>
      </Link>
    </section>
  )
}

export default Preview
