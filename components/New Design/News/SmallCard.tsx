import Link from "next/link"

type Props = {
  singleNews: any
  show?: boolean
}
const SmallCard = ({ singleNews, show }: Props) => {
  const { fields } = singleNews
  const slug = fields.slug
  const imageUrl = fields.thumbnail?.fields.file.url
  return (
    <div
      className={`rounded-[40px] bg-white p-6 shadow-5xl relative overflow-clip ${
        show ? "" : "lg:block hidden"
      }`}
    >
      <h3 className='font-bold px-2 pb-2 text-lg line-clamp-3'>
        {fields.title}
      </h3>
      {/* <p className=' text-sm px-2 line-clamp-2'>
        The Edo State Government says it is coming up with interventions to
        strengthen healthcare regulation and improve quality health services to
        the residents… Government says it is coming up with interventions to
        strengthen healthcGovernment says it is coming up with interventions to
        strengthen healthcGovernment says it is coming up with interventions to
        strengthen healthc
      </p> */}
      <Link href={`/singleNews/${slug}`}>
        <button className='absolute bg-yellow-400 px-8 text-white py-2 rounded-tl-[40px] bottom-0 right-0'>
          Read More
        </button>
      </Link>
    </div>
  )
}

export default SmallCard
