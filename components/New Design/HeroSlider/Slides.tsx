type Props = {
  image: string
}
const Slides = ({ image }: Props) => {
  return (
    <div
      className={`relative ${image} bg-cover w-screen lg:h-screen h-[90vh] bg-center bg-no-repeat`}
    >
      <div className='absolute inset-0 bg-black/50'></div>
    </div>
  )
}

export default Slides
