import Image from 'next/image';
import Link from 'next/link';
const man = './Images/man.png';
import image from '../../public/Images/image 2.png';

const news = [
  {
    id: 1,
    title: 'Planning Research and Statistics',
    content:
      'lorem30Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    image: man,
    url: '/',
  },

  {
    id: 2,
    title: 'Planning Research and Statistics',
    content:
      'lorem30Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    image: man,
    url: '/',
  },

  {
    id: 3,
    title: 'Planning Research and Statistics',
    content:
      'lorem30Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    image: man,
    url: '/',
  },
];

const News = function () {
  return (
    <section className='container pb-7 '>
      <div className='mb-6 '>
        <div className=' relative  h-[19rem] w-[19rem] md:w-full md:h-[600px]'>
          <div className='w-[19rem]   h-[19rem] lg:w-full lg:h-[600px]'>
            {' '}
            <Image
              src={image}
              // width={1500}
              // height={600}
              layout='fill'
              alt='application'
              className='-rotate-90 md:rotate-0 rounded-3xl  '
            />
          </div>

          <div className='absolute top-[4rem] left-[5rem]  md:top-[10rem] md:left-[3rem]'>
            <div className='text-center'>
              <h3 className='font-semibold w-[7rem]  text-2xl md:text-5xl md:w-[25rem]  text-black mb-3 lg:mb-7'>
                Application form for Private Health Institution
              </h3>
              <button className='  bg-[#005410] w-32 cursor-pointer rounded-md text-white py-2 px-2 lg:px-4 capitalize'>
                Download
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-7 lg:gap-y-0 gap-x-14 pb-11 place-items-center '>
        {news.map((item) => {
          return (
            <div key={item.id}>
              {/* <Image src={item.image} alt='man' /> */}
              <h3 className='font-bold text-2xl text-black capitalize mb-5 mt-3'>
                {item.title}
              </h3>
              <p className='mb-5'>{item.content}</p>

              <Link href={item.url}>
                <a className='bg-primary rounded-md text-white py-2 px-4  capitalize'>
                  view more
                </a>
              </Link>
            </div>
          );
        })}
      </div>
      <div className='text-center'>
        <button className='underline w-32 underline-offset-4 text-lg font-bold text-[#005410] py-2 px-4 rounded-sm capitalize'>
          view more
        </button>
      </div>
    </section>
  );
};

export default News;
