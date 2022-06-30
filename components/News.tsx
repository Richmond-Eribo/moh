import { NextServer } from 'next/dist/server/next';
import Image from 'next/image';
import man from '../Images/man.png';

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
    <section className='container pb-7'>
      <h3 className='text-center font-bold text-4xl text-black mb-20 pt-14'>
        News
      </h3>
      <div className='grid grid-cols-3 gap-x-14 pb-11 place-items-center '>
        {news.map((item) => {
          return (
            <div key={item.id}>
              <Image src={item.image} alt='man' />
              <h3 className='font-bold text-2xl text-black capitalize mb-5 mt-3'>
                {item.title}
              </h3>
              <p className='mb-5'>{item.content}</p>
              <a
                className='bg-[#005410] text-white py-2 px-4 rounded-sm capitalize'
                href={item.url}
              >
                view more
              </a>
            </div>
          );
        })}
      </div>
      <div className='text-center'>
        <button className='underline underline-offset-4 text-lg font-bold text-[#005410] py-2 px-4 rounded-sm capitalize'>
          view more
        </button>
      </div>
    </section>
  );
};

export default News;
