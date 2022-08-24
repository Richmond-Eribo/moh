import Image from 'next/image'
// const directorMan = './Images/directorman.jpeg';
import directorMan from '../public/Images/directorman.jpeg'
import directorWoman from '../public/Images/directorwoman.jpeg'

const directors = [
  {
    id: 1,
    name: 'Dr Edward Edoseghe AISOWEREN',
    post: 'Director medical services',
    url: '/',
    image: directorMan,
  },

  {
    id: 2,
    name: 'Iruobe Lauretta',
    post: 'Director medical services',
    url: '/',
    image: directorWoman,
  },

  {
    id: 3,
    name: 'Dr Edward Edoseghe AISOWEREN',
    post: 'Director medical services',
    url: '/',
    image: directorMan,
  },

  {
    id: 4,
    name: 'Dr Edward Edoseghe AISOWEREN',
    post: 'Director medical services',
    url: '/',
    image: directorMan,
  },

  {
    id: 5,
    name: 'Dr Edward Edoseghe AISOWEREN',
    post: 'Director medical services',
    url: '/',
    image: directorMan,
  },

  {
    id: 6,
    name: 'Dr Edward Edoseghe AISOWEREN',
    post: 'Director medical services',
    url: '/',
    image: directorMan,
  },
]

// This page is not in use
const Directors = () => {
  return (
    <section>
      <div className='bg-[#005410]'>
        <h1 className='text-[#fff] container font-semibold text-3xl uppercase py-8'>
          our directors
        </h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 container'>
        {directors.map(director => {
          return (
            <div
              key={director.id}
              className='flex flex-col items-center gap-y-2 h-[20rem] p-5 bg-[#EFEFEF] text-center'
            >
              {' '}
              {/* <div className='  '> */}{' '}
              <Image
                src={director.image}
                className='rounded-full w-[1rem] h-[1rem]'
                height={150}
                width={150}
                alt='man'
              />
              {/* </div> */}
              <h3 className='font-bold'>{director.name}</h3>
              <h4 className='text-[#005410] font-semibold'>{director.post}</h4>
              <button className='bg-[#005410] text-white py-2 px-12 rounded-sm capitalize'>
                view
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Directors
