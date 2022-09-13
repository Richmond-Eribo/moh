import { useState } from 'react';
import contact from '../../public/Images/contact.png';
import Image from 'next/image';
import Reach from 'components/Reach';

const HelpLine = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <section className='container lg:hidden'>
      {isOpen || (
        <div
          className=' bg-white flex items-center justify-center p-1 rounded-full  fixed bottom-0  right-4 '
          onClick={() => setIsOpen(true)}
        >
          <Image
            src={contact}
            alt='helpline'
            width={35}
            height={35}
            className='rounded-full'
          />
        </div>
      )}

      <div className='fixed bottom-0  right-4'>
        {isOpen && <Reach setIsOpen={setIsOpen} />}
      </div>
    </section>
  );
};

export default HelpLine;
