import Image from "next/image"
import Link from "next/link"
type Props = {
  color: string
}
const Logo = ({ color }: Props) => {
  return (
    <div className='flex items-center'>
      {/* <Link href='/'> */}
      <div className={`border-r px-2 border-${color}`}>
        <Image src='/edsg.png' width={62} height={62} alt='edsg' />
      </div>
      {/* </Link> */}
      <Link href='/'>
        <h1
          className={`uppercase font-semibold ml-2 leading-5 text-green-800 `}
        >
          Ministry of health <br />
          {/* <span className='font-extrabold'>Edo State</span> */}
        </h1>
      </Link>
    </div>
  )
}

export default Logo
