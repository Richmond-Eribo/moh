import Image from "next/image"

const Qoute = () => {
  return (
    <section className='lg:px-400 lg:py-120half flex justify-between'>
      {Profiles.map((profile) => (
        <div key={profile.name} className='flex h-[200px] lg:w-[550px]'>
          <div className='relative '>
            <div className='w-full h-[180px]  overflow-clip  bg-yellow-500 rounded-[40px]'>
              <Image
                src='/New/ObasekiAvatar.png'
                width={180}
                height={180}
                alt='obaseki avatar'
                className='z-10'
              />
            </div>
            <div className='absolute qoute -top-4 -right-4   text-white '>
              <Image
                src='/New/qoute.png'
                width={50}
                height={50}
                alt='qoute'
                className=''
              />
            </div>
          </div>

          <div className='flex-1 py-4 lg:ml-5 flex flex-col justify-between'>
            <p className='lg:text-base'>{profile.qoute}</p>
            <p className='text-right'>
              {profile.prefix}, <br />
              <strong className='text-xl'>{profile.name}</strong>,
              <br />
              {profile.title}
            </p>
          </div>
        </div>
      ))}
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
    prefix: "His Excellency",
  },

  {
    name: "Prof Obehi Akoria",
    qoute:
      "When we all come to the realization that the next patient could be us, or someone closely related to us, the changes will be transformational.",
    title: "Commissioner of Health",
    prefix: "",
  },
]
