import Image from "next/image"
import Link from "next/link"
type Props = {
  color: string
}
const Logo = ({ color }: Props) => {
  return (
    <div className='flex items-center'>
      {/* <Link href='/'> */}
      <Image src='/edsg.png' width={62} height={62} alt='edsg' />
      {/* </Link> */}
      <Link href='/'>
        <h1 className={`uppercase font-semibold ml-1 leading-5 text-${color}`}>
          Edo State <br />
          <span className='font-extrabold'>Ministry of health</span>
        </h1>
      </Link>
    </div>
  )
}

export default Logo
