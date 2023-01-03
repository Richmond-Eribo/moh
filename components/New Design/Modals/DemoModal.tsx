import {useState} from 'react'

const DemoModal = () => {
  const [modal, setModal] = useState(true)
  return (
    <div
      className={`fixed z-40 top-[50%] duration-700 ease-in-out  ${
        modal ? ' lg:left-[40%] left-[15%]' : 'lg:left-[120%] left-[120%]'
      }  `}
    >
      <div className=' bg-secondary w-80 py-10 rounded-md p-5'>
        <div
          onClick={() => setModal(false)}
          className='btn btn-sm btn-circle bg-secondary  absolute text-white right-3 top-3'
        >
          ✕
        </div>
        <div className='text-white py-2'>
          This is a Demo. some text are not filled. Click of the close button to
          continue
        </div>
      </div>
    </div>
  )
}

export default DemoModal
