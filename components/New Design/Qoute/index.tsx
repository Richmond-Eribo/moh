import Image from "next/image"
import { Slide } from "react-awesome-reveal"

const Qoute = () => {
  return (
    <section className=' px-5 py-120small lg:px-400 lg:py-120half '>
      {/* <h3 className='text-center font-bold text-4xl text-text pb-120small lg:pb-120half'>
        Qoute
      </h3> */}
      <Slide direction='right' cascade triggerOnce duration={1500}>
        <div className='flex flex-col lg:flex-row justify-between'>
          {Profiles.map((profile) => (
            <div
              key={profile.name}
              className='flex h-[200px] border-b-4 lg:border-b-0 my-3 lg:m-0 lg:w-[550px]'
            >
              <div className='relative '>
                <div className='w-full hidden lg:block h-[180px]  overflow-clip  bg-yellow-500 rounded-[40px]'>
                  <Image
                    src={profile.url}
                    width={180}
                    height={180}
                    alt='obaseki avatar'
                    className='z-10 '
                  />
                </div>
                <div className='w-full lg:hidden h-[130px]  overflow-clip  bg-yellow-500 rounded-[40px]'>
                  <Image
                    src={profile.url}
                    width={130}
                    height={130}
                    alt='obaseki avatar'
                    className='z-10 '
                  />
                </div>
                <div className='absolute hidden lg:block qoute -top-4 -right-4   text-white '>
                  <Image
                    src='/New/qoute.png'
                    width={50}
                    height={50}
                    alt='qoute'
                    className=''
                  />
                </div>
                <div className='absolute  lg:hidden qoute -top-3 -right-3   text-white '>
                  <Image
                    src='/New/qoute.png'
                    width={40}
                    height={40}
                    alt='qoute'
                    className=''
                  />
                </div>
              </div>

              <div className='flex-1 ml-3   lg:py-4 lg:ml-5  flex flex-col justify-between'>
                <p className='lg:text-base'>{profile.qoute}</p>
                <p className='lg:text-right'>
                  {profile.prefix} <br />
                  <strong className='lg:text-xl'>{profile.name}</strong>,
                  <br />
                  {profile.namePrefix && (
                    <>
                      {profile.namePrefix} <br />
                    </>
                  )}
                  {profile.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Slide>
    </section>
  )
}

export default Qoute

const Profiles = [
  {
    name: "Godwin Obaseki",
    qoute:
      "If it is not good enough for me, it cannot be good enough for Edo people.",
    title: "Governor, Edo State",
    prefix: "His Excellency,",
    url: "/New/ObasekiAvatar.png",
  },

  {
    name: "Prof Obehi Akoria",
    qoute:
      "When we all come to the realization that the next patient could be us, or someone closely related to us, the changes will be transformational.",
    title: "Commissioner of Health",
    prefix: "",
    namePrefix: "Honourable",
    url: "/New/ObehiAvatar.png",
  },
]
