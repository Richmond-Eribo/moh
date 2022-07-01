// import {NextServer} from 'next/dist/server/next'
import Image from 'next/image'

const HighlightImage = [
  '/Images/info - 001.png',
  '/Images/info - 002.png',
  '/Images/info - 003.png',
  '/Images/info - 004.png',
  '/Images/info - 005.png',
  '/Images/info - 006.png',
  '/Images/info - 007.png',
  '/Images/info - 008.png',
  '/Images/info - 009.png',
  '/Images/info - 010.png',
]

const Highlights = function () {
  return (
    <section className='container pb-7 pt-7'>
      <div>
        <h3 className='text-center font-bold text-4xl text-black mb-20 pt-14'>
          Hightlights
        </h3>
      </div>
      <div className='carousel carousel-center w- p-4 space-x-4  rounded-box'>
        {HighlightImage.map((url, index) => (
          <figure key={url} id={`${index}`} className='carousel-item'>
            <Image src={url} width={310} height={310} alt='ingo' />
          </figure>
        ))}
      </div>
      <div className='flex justify-center w-full py-2 gap-2'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
          <a
            key={num}
            href={`#${num}`}
            className='btn bg-green-600 border-none btn-xs'
          >
            {num}
          </a>
        ))}
      </div>
    </section>
  )
}

export default Highlights
