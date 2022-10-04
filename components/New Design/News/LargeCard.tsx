import { NewsField } from "interfaces/contentfulTypes"
import Image from "next/image"
import Link from "next/link"
import RichTextWrapper from "../RichTextWrapper"
type Props = {
  singleNews: any
}
const LargeCard = ({ singleNews }: Props) => {
  const { fields } = singleNews
  const slug = fields.slug
  const imageUrl = fields.thumbnail?.fields.file.url
  return (
    <div className='bg-text rounded-[40px]   max-w-[360px] h-[26rem] lg:h-[31.25rem] text-white tracking-wide relative p-4 overflow-clip'>
      <figure className='h-64 overflow-clip mb-5 w-full relative rounded-[40px] bg-white'>
        <Image
          src={`https:${imageUrl}`}
          layout='fill'
          objectFit='cover'
          alt='placeholder'
        />
      </figure>
      {/* <div>
        <p>By AdeJore</p>
        <p>Aug, 2021</p>
      </div> */}

      <h3 className='fontbold line-clamp-4  px-2 pb-2 text-lg lg:text-xl '>
        {fields.title}
      </h3>
      {/* <div className='text-gray-200 text-sm px-2 line-clamp-3'>
        <RichTextWrapper RichText={fields.writeUp} />
      </div> */}
      <Link href={`/singleNews/${slug}`}>
        <button className='absolute bg-pink-800 px-8 text-white py-2 rounded-tl-[40px] bottom-0 right-0'>
          Read More
        </button>
      </Link>
    </div>
  )
}

export default LargeCard
