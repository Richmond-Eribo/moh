type Props = {
  image: string
}
const Slides = ({ image }: Props) => {
  return (
    <div
      className={`relative ${image} bg-cover w-screen h-screen bg-center bg-no-repeat`}
    >
      <div className='absolute inset-0 bg-black/25'></div>
    </div>
  )
}

export default Slides
