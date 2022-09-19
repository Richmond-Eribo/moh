import RichTextWrapper from "components/RichTextWrapper"
import { RichTextContent } from "contentful"
import React, { useState } from "react"

// const [modal, setModal] = useState(true)
type Props = {
  title: string
  WriteUp: RichTextContent
  ModalTitle?: string
  SetModalTitle: React.Dispatch<React.SetStateAction<string>>
  ModalWriteUp: string
  SetModalWriteUp: React.Dispatch<React.SetStateAction<any>>
}

const OverviewModal = ({
  title,
  WriteUp,
  ModalTitle,
  SetModalTitle,
  ModalWriteUp,
  SetModalWriteUp,
}: Props) => {
  return (
    <>
      <label
        onClick={() => {
          SetModalTitle(title)
          SetModalWriteUp(WriteUp)
        }}
        htmlFor='my-modal-3'
        className=' modal-button bg-[#005410] w-32 cursor-pointer rounded-md text-white py-2 px-2 lg:px-4 capitalize'
      >
        Know More
      </label>

      <input type='checkbox' id='my-modal-3' className='modal-toggle' />
      <div className='modal rounded-md'>
        <div className='modal-box relative'>
          <label
            htmlFor='my-modal-3'
            className='btn  btn-sm btn-circle bg-primary absolute right-2 top-2'
          >
            ✕
          </label>
          <h3 className='text-lg text-left font-bold'>{ModalTitle}</h3>
          <div className='scrollbar snap-y overflow-y-scroll h-[500px] '>
            <p className='py-4 leading-7  text-left'>
              <RichTextWrapper RichText={ModalWriteUp} />
            </p>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .scrollbar::-webkit-scrollbar {
            width: 8px;
            // height: 0px;
          }

          .scrollbar::-webkit-scrollbar-track {
            // border-radius: 100vh;
            // background: #f7f4ed;
            background: rgb(43 200 237 / 0.05);
            margin-left: 4px;
          }

          .scrollbar::-webkit-scrollbar-thumb {
            background: #005410;
            border-radius: 100vh;
            border: 2px solid #f6f7ed;
          }

          .scrollbar::-webkit-scrollbar-thumb:hover {
            background: #c0a0b9;
          }
        `}
      </style>
    </>
  )
}

export default OverviewModal
