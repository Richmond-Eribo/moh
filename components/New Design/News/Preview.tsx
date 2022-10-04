import LargeCard from "./LargeCard"
import SmallCard from "./SmallCard"

const Preview = () => {
  return (
    <section className='grid gap-3 lg:grid-cols-3 lg:grid-rows-3 lg:px-400 lg:py-120half'>
      {["1", "2"].map((news) => (
        <div key={news} className='row-span-3 bg-stone-700'>
          {news}
          <LargeCard />
        </div>
      ))}
      {["3", "4", "5"].map((news) => (
        <div key={news} className=' bg-stone-200'>
          {news}
          <SmallCard />
        </div>
      ))}
    </section>
  )
}

export default Preview
