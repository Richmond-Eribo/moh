import Image from 'next/image';
import Link from 'next/link';
const man = './Images/man.png';
import image from '../../public/Images/image 2.png';
import mobile from '../../public/Images/mobile.png';
// import registration from '../../public/Files/registration.txt';
const registration = './Files/registration.doc';

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
type Props = {
  newsData: any;
};

const News = function ({ newsData }: Props) {
  // console.log(newsData);

  return (
    <section className='container pb-7 '>
      <div className='mb-6 '>
        {/* deskstop news */}
        <div className='hidden md:block relative  h-[19rem] w-[19rem] md:w-full md:h-[600px]'>
          <div className='lg:w-full lg:h-[600px]'>
            {' '}
            <Image
              src={image}
              layout='fill'
              alt='application'
              className=' rounded-3xl  '
            />
          </div>

          <div className='absolute top-[4rem] left-[5rem]  md:top-[10rem] md:left-[3rem]'>
            <div className='text-center'>
              <h3 className='font-semibold w-[25rem]  text-5xl text-black mb-7'>
                Application form for Private Health Institution
              </h3>
              <button className='  bg-[#005410] w-32 cursor-pointer rounded-md text-white py-2 px-2 lg:px-4 capitalize'>
                <a href={registration} download>
                  Download{' '}
                </a>
              </button>
            </div>
          </div>
        </div>
        {/* mobile news */}
        <div className=' relative md:hidden '>
          <div className='w-full h-[13rem]'>
            {' '}
            <Image
              src={mobile}
              layout='fill'
              alt='application'
              className=' rounded-3xl  '
            />
          </div>

          <div className='absolute top-[2rem] left-[2rem]'>
            <div className='text-center'>
              <h3 className='font-semibold w-[10rem]  text-x   text-black mb-3 '>
                Application form for Private Health Institution
              </h3>
              <button className='  bg-[#005410]  cursor-pointer rounded-md text-white py-2 px-2 lg:px-4 capitalize'>
                <a href={registration} download>
                  Download{' '}
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-7 lg:gap-y-0 gap-x-14 pb-11 place-items-center '>
        {newsData &&
          newsData.map((item: any) => {
            const { fields } = item;
            console.log(fields);
            const {
              writeUp: { content },
            } = fields;

            const writeUp = content[0].content[0].value;

            return (
              <div key={fields.title}>
                <h3 className='font-bold text-2xl text-black capitalize mb-5 mt-3'>
                  {fields.title}
                </h3>
                <p className='mb-5'>{writeUp}</p>
                <Link href='/SingleNews/SingleNews'>
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
