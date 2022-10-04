import { Slide } from "react-awesome-reveal"
import Image from "next/image"

const Philosophy = () => {
  return (
    <div className='container '>
      <h3 className='text-center font-bold text-4xl text-text  pb-120small lg:pb-120half'>
        Strategy is our Philosophy
      </h3>

      <div className=' grid  mb-16  grid-cols-1 gap-y-5 lg:gap-y-0 lg:grid-cols-3 gap-x-10 place-items-center '>
        {/* <Slide direction='up' triggerOnce duration={1500}> */}
        {features.slice(0, 9).map((item) => {
          return (
            <div
              key={item.id}
              className='bg-white w-full hover:shadow-2xl duration-500 lg:h-[20rem] shadow-6xl p-6 rounded-[40px] items-center'
            >
              <figure className='mx-auto flex justify-center '>
                <Image
                  src={item.image}
                  height={50}
                  width={50}
                  alt={item.title}
                  className='grayscale'
                />
              </figure>
              <h3 className='font-bold text-center text-2xl text-primary capitalize mb-5 mt-5'>
                {item.title}
              </h3>
              <p className='text-text'>{item.content}</p>
            </div>
          )
        })}
        {/* </Slide> */}
      </div>
    </div>
  )
}

export default Philosophy

const features = [
  {
    id: 1,
    title: "vision",
    content:
      "Edo state will become a regional reference point for quality healthcare delivery, and the desired destination for innovation, education and research in healthcare.",
    image: "/svg/vision.svg",
  },
  {
    id: 2,
    title: "mission",
    content:
      "Working in motivated, goal-oreiented teams in collaboration with other government sectors, the private sector, non-governmental organizations and other partners, to improve health.",
    image: "/svg/mission.svg",
  },
  {
    id: 3,
    title: "core values",
    content: "Collaboration, integration, efficiency and sustainabitly.",
    image: "/svg/values.svg",
  },
]
