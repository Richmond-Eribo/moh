import Image from 'next/image'
import Link from 'next/link'
// const man = './Images/man.png'
// import mobile from '../../public'
// import registration from '../../public/Files/registration.txt';

type Props = {
  newsData: any
}

const News = function ({newsData}: Props) {
  // console.log(newsData);

  return (
    <section className='container pb-7 '>
      <h3 className='text-center font-bold text-4xl text-black mb-10'>
        Latest News
      </h3>
      <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-7 lg:gap-y-0 gap-x-14 pb-11 place-items-center '>
        {newsData &&
          newsData.map((item: any) => {
            const {fields} = item
            const slug = fields.slug
            const imageUrl = fields.thumbnail?.fields.file.url
            // const {
            //   writeUp: {content},
            // } = fields

            //  const writeUp = content[0].content[0].value

            return (
              <div
                key={fields.title}
                className=' h-[28rem] w-[23rem] overflow-clip  shadow-xl rounded-lg'
              >
                {/* You need to work on the height properly, I will sent you a link */}
                <div className='w-full '>
                  <Image
                    src={`https:${imageUrl}`}
                    // src='/Images/directorman.jpeg'
                    //layout='fill'
                    alt='application'
                    height={500}
                    width={700}
                    className='  '
                  />
                </div>
                <div className='px-4'>
                  <h3 className='font-bold overflow-clip text-xl text-black h-[5.7rem] capitalize mb-5 mt-3'>
                    {fields.title}
                  </h3>
                  {/* <p className='mb-5 h-[8rem]'>{writeUp}</p> */}
                  <Link href={`/SingleNews/${slug}`}>
                    <a className='bg-primary rounded-md text-white py-2 px-5  capitalize'>
                      Read Post
                    </a>
                  </Link>
                </div>
              </div>
            )
          })}
      </div>
      <div className='text-center'>
        <Link href='/News'>
          <button className='underline w-32 underline-offset-4 text-lg font-bold text-[#005410] py-2 px-4 rounded-sm capitalize'>
            view more
          </button>
        </Link>
      </div>
    </section>
  )
}

export default News
