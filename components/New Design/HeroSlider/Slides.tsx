import { picturesField } from "interfaces/contentfulTypes"
import Image from "next/image"

type Props = {
  image: string
}

const Slides = ({ image }: Props) => {
  console.log(image)
  return (
    <div
      className={`relative overflow-hidden  w-screen lg:h-screen h-[90vh] bg-center bg-no-repeat`}
    >
      <Image
        src={"https:" + image}
        layout='fill'
        objectFit='cover'
        alt='homepage slider'
        priority
      />
      <div className='absolute inset-0 bg-black/50'></div>
    </div>
  )
}

export default Slides
