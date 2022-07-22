import OverviewModal from 'components/Modals/OverviewModal'
import Image from 'next/image'

const features = [
  {
    id: 1,
    title: 'vision',
    content:
      'Edo state will become a regional reference point for quality healthcare delivery, and the desired destination for innovation, education and research in healthcare.',
    image: '/Images/vission.png',
  },
  {
    id: 2,
    title: 'mission',
    content:
      'Working in motivated, goal-oreiented teams in collaboration with other government sectors, the private sector, non-governmental organizations and other partners, to improve health.',
    image: '/Images/mission.png',
  },
  {
    id: 3,
    title: 'core values',
    content: 'Collaboration, integration, efficiency and sustainabitly.',
    image: '/Images/our values.png',
  },
]

const overview = [
  {
    id: 1,
    title: 'Office of The Honourable Commissioner',
    url: '/',
  },
  {
    id: 2,
    title: 'Office of The permanent Secretary',
    url: '/',
  },
  {
    id: 3,
    title: 'Department of Planning Research and Statistics ',
    url: '/',
  },
  {
    id: 4,
    title: 'Department of Medical Sciences',
    url: '/',
  },
  {
    id: 5,
    title: 'Department of Nursing Sciences',
    url: '/',
  },
  {
    id: 6,
    title: 'Department of Medical Laboratory Sciences',
    url: '/',
  },
  {
    id: 7,
    title: 'Department of Administration and supply',
    url: '/',
  },
]

const Features = function () {
  return (
    <section className='bg-gray-2001 py-14 '>
      <div className='container '>
        <h3 className='text-center font-bold text-4xl text-black mb-20'>
          Strategy is our Philosophy
        </h3>

        <div className=' grid  mb-16  grid-cols-1 gap-y-5 lg:gap-y-0 lg:grid-cols-3 gap-x-10 place-items-center '>
          {features.map(item => {
            return (
              <div
                key={item.id}
                className='bg-white lg:h-[25rem] shadow-md p-6 rounded-sm'
              >
                <Image
                  src={item.image}
                  height={90}
                  width={90}
                  alt={item.title}
                />
                <h3 className='font-bold text-2xl text-black capitalize mb-5 mt-5'>
                  {item.title}
                </h3>
                <p>{item.content}</p>
              </div>
            )
          })}
        </div>
      </div>

      <div className='bg-gray-200 py-3 '>
        <div className='container '>
          <h3 className='text-center font-bold text-4xl text-black mb-20 pt-14'>
            An Overview of the Ministry of Health
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16'>
            {overview.map(item => {
              return (
                <div
                  key={item.title}
                  className='bg-white px-2 py-3  text-center rounded'
                >
                  <h3 className='font-bold mb-4 capitalize'>{item.title}</h3>

                  {/* <button className='bg-[#005410] w-32 rounded-md text-white py-2 px-2 lg:px-4 capitalize'>
                    know more
                  </button> */}
                  <OverviewModal />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
