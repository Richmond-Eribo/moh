import Image from 'next/image'
import Link from 'next/link'

// This page is not in use
const Departments = () => {
  return (
    <div>
      <Link href='/Aboutus'>
        <a className='bg-red-500'>About us</a>
      </Link>

      <Image
        src='/imageYouWant.png'
        height={100}
        width={300}
        alt='Image you want'
      />
    </div>
  )
}

export default Departments
