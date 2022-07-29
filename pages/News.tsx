import useGetNews from 'hooks/useGetNews';
import Image from 'next/image';
import Link from 'next/link';
const News = () => {
  const NewsFromContentful = useGetNews();
  console.log(NewsFromContentful);
  return (
    // <div>
    //   <>{console.log(NewsFromContentful?.data)}</>
    //   this is the news page
    // </div>
    <section>
      <div className='bg-[#005410]'>
        <h1 className='text-[#fff] font-semibold text-3xl uppercase py-8 container'>
          news
        </h1>
      </div>
      <div className='grid container mt-10 lg:mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-7 lg:gap-y-0 gap-x-14 pb-11 place-items-center '>
        {NewsFromContentful.data &&
          NewsFromContentful.data.map((item: any) => {
            const { fields } = item;
            const slug = fields.slug;
            const imageUrl = fields.thumbnail.fields.file.url;

            const {
              writeUp: { content },
            } = fields;

            const writeUp = content[0].content[0].value;

            return (
              <div
                key={fields.title}
                className=' h-[30rem] w-[25rem] overflow-clip  shadow-xl rounded-lg'
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
                  <h3 className='font-bold text-xl text-black h-[7rem] capitalize mb-5 mt-3'>
                    {fields.title}
                  </h3>
                  {/* <p className='mb-5 h-[8rem]'>{writeUp}</p> */}
                  <Link href={`/SingleNews/${slug}`}>
                    <a className='bg-primary rounded-md text-white py-2 px-5  capitalize'>
                      view
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
      {/* <div className='text-center'>
        <button className='underline w-32 underline-offset-4 text-lg font-bold text-[#005410] py-2 px-4 rounded-sm capitalize'>
          view more
        </button>
      </div> */}
    </section>
  );
};

export default News;
