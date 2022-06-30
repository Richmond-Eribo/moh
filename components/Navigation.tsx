import Logo from '../Images/logo.png';
import Image from 'next/image';
const Navigation = function () {
  return (
    <section>
      <nav className='flex justify-between items-center container text-[#685A5A]'>
        <div className='capitalize flex items-center justify-center gap-x-1'>
          <span>
            <Image src={Logo} height={70} width={70} alt='logo ' />
          </span>{' '}
          <div className='font-bold '>
            <h3> edo state</h3>
            <h3> ministry of health</h3>
          </div>
        </div>
        <ul className='capitalize flex gap-x-7'>
          <li>home</li>
          <li>about</li>
          <li>departments</li>
          <li>directors</li>

          <li>contact us</li>
        </ul>
      </nav>
    </section>
  );
};

export default Navigation;
