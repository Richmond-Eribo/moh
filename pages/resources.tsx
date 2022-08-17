import Image from 'next/image';
import pdf from '../public/Images/pdf image.png';

const Resources = () => {
  return (
    <div className=''>
      <div className='bg-[#005410]'>
        <h1 className='text-[#fff] font-semibold text-3xl uppercase py-8 container'>
          Resources
        </h1>
      </div>
      <div className='container'>
        <h3 className=' font-bold text-4xl text-black mb-5'>
          Ministry of Health Resources
        </h3>
        <div className=' border py-5 border-black mb-10 rounded-lg'>
          <div className='flex mb-5 text-2xl px-2 justify-between items-center'>
            <h3>Display downloads per page</h3>
            <span>
              Search{' '}
              <input
                type='text'
                className='border-black border-b p-2 text-lg'
              />
            </span>
          </div>
          <div className='grid grid-cols-5 px-2 font-semibold bg-[#e9ecef] py-4 gap-7  items-center justify-between'>
            <h3 className='col-span-2'>Title</h3>
            <h3>Catergories</h3>
            <h3>Update Date</h3>
            <h3>Download</h3>
          </div>
          <div className='grid grid-cols-5 border gap-7 px-2 items-center  py-4 justify-between'>
            {/* <h3 className='col-span-2 flex items-center gap-2 text-[#36597C] font-semibold hover:underline cursor-pointer'>
              IMPROVED HEALTH SERVICE DELIVERY: THREE YEARS OF PURPOSEFUL
              GOVERNANCE IN OYO STATE
            </h3> */}
            <div className='col-span-2 text-[#36597C]  font-semibold hover:underline cursor-pointer'>
              <div className='flex gap-2 items-center'>
                <Image src={pdf} width={60} height={60} />
                <h3>
                  IMPROVED HEALTH SERVICE DELIVERY: THREE YEARS OF PURPOSEFUL
                  GOVERNANCE IN OYO STATE{' '}
                </h3>
              </div>
            </div>
            <h3>Catergories</h3>
            <h3>June 7, 2022</h3>
            <a className='  bg-[#005410] text-center cursor-pointer rounded-md text-white py-2 px-4 lg:px-4 capitalize'>
              Download
            </a>
          </div>
          <div className='grid grid-cols-5 gap-7 px-2 items-center justify-between  py-4'>
            <div className='col-span-2 text-[#36597C]  font-semibold hover:underline cursor-pointer'>
              <div className='flex gap-2 items-center'>
                <Image src={pdf} width={60} height={60} />
                <h3>
                  IMPROVED HEALTH SERVICE DELIVERY: THREE YEARS OF PURPOSEFUL
                  GOVERNANCE IN OYO STATE{' '}
                </h3>
              </div>
            </div>
            <h3>Catergories</h3>
            <h3>September 4, 2020</h3>
            <a className='  bg-[#005410]  text-center cursor-pointer rounded-md text-white py-2 px-4 lg:px-4 capitalize'>
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
