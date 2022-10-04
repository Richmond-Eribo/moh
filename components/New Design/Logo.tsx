import Image from "next/image"
type Props = {
  color: string
}
const Logo = ({ color }: Props) => {
  return (
    <div className='flex items-center'>
      <Image src='/edsg.png' width={62} height={62} alt='edsg' />
      <h1 className={`uppercase font-semibold ml-1 leading-5 text-${color}`}>
        Edo State <br />
        <span className='font-extrabold'>Ministry of health</span>
      </h1>
    </div>
  )
}

export default Logo
