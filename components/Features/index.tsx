import Image from 'next/image'

const features = [
  {
    id: 1,
    title: 'vision',
    content:
      'To free the citizens of Edo State from the heavy burden of communicable and non-communicable diseases and to significantly increase the life expectancy at birth to 70 years by 2020 and the quality of life of the people.',
    image: './Images/vission.png',
  },
  {
    id: 2,
    title: 'mission',
    content:
      'To develop and implement policies and programs that will strengthen Edo State health system and enable it deliver effective, efficient, affordable, quality and readily accessible health services that will allow the people to live healthy and very productive lives.',
    image: './Images/mission.png',
  },
  {
    id: 3,
    title: 'our values',
    content:
      'equity, excellence, commitment, quality (client satisfaction), teamwork, competence, due process (transparency and accountability), effectiveness, zero tolerance for waste and corruption, and integrity. Before we deal with the focal point of this brief, permit us to quickly also State the functions, organizational set up and the main policy/strategic thrusts of the Ministry of Health.',
    image: './Images/our values.png',
  },
]

const overview = [
  {
    id: 1,
    title: 'OFFICE OF THE HONOURABLE COMMISSIONER',
    url: '/',
  },
  {
    id: 2,
    title: 'OFFICE OF THE PERMANENT SECRETARY',
    url: '/',
  },
  {
    id: 3,
    title: 'DEPARTMENT OF PLANNING RESEARCH AND STATISTICS',
    url: '/',
  },
  {
    id: 4,
    title: 'DEPARTMENT OF MEDICAL SERVICES',
    url: '/',
  },
  {
    id: 5,
    title: 'DEPARTMENT OF NURSING SERVICES',
    url: '/',
  },
  {
    id: 6,
    title: 'DEPARTMENT OF MEDICAL LABORATORY SERVICES',
    url: '/',
  },
  {
    id: 7,
    title: 'DEPARTMENT OF ADMINISTRATION AND SUPPLY',
    url: '/',
  },
]

const Features = function () {
  return (
    <section className='bg-gray-200 py-14'>
      <div className='container '>
        <h3 className='text-center font-bold text-4xl text-black mb-20'>
          Strategy is our Philosophy
        </h3>

        <div className=' grid grid-cols-3 gap-x-10 place-items-center '>
          {features.map(item => {
            return (
              <div key={item.id} className='bg-white h-[30rem] p-6 rounded-sm'>
                <Image
                  src={item.image}
                  height={100}
                  width={100}
                  alt={item.title}
                />
                <h3 className='font-bold text-2xl text-black capitalize mb-5 mt-5'>
                  {' '}
                  {item.title}
                </h3>
                <p>{item.content}</p>
              </div>
            )
          })}
        </div>
      </div>

      <div className='container'>
        <h3 className='text-center font-bold text-4xl text-black mb-20 pt-14'>
          An Overview of the Ministry of Health
        </h3>
        <div className='grid grid-cols-3 gap-6 '>
          {overview.map(item => {
            return (
              <div
                key={item.title}
                className='bg-white p-2 h-[7rem] text-center rounded'
              >
                <h3 className='font-bold mb-4'>{item.title}</h3>
                <a
                  className='bg-[#005410] text-white py-2 px-4 rounded-sm capitalize'
                  href={item.url}
                >
                  know more
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
