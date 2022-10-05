import { Input } from "components"
import RichTextWrapper from "components/New Design/RichTextWrapper"
import { RichTextContent } from "contentful"
import React, { useState } from "react"

// const [modal, setModal] = useState(true)
type Props = {
  DocumentTitle: string
  SetDocumentTitle: React.Dispatch<React.SetStateAction<string>>
  DownloadLink: string
}

const RegistrationModal = ({
  DocumentTitle,
  SetDocumentTitle,
  DownloadLink,
}: Props) => {
  const [submitted, setSubmitted] = useState(false)
  return (
    <>
      {/* {console.log(DownloadLink)} */}
      <label
        onClick={() => {
          SetDocumentTitle(DocumentTitle)
        }}
        htmlFor='my-modal-3'
        className=' modal-button bg-[#005410 py-2 text-center  roundBtn capitalize'
      >
        Download
      </label>

      <input type='checkbox' id='my-modal-3' className='modal-toggle' />
      <div className='modal '>
        <div className='modal-box rounded-md relative'>
          <label
            onClick={() => setSubmitted(false)}
            htmlFor='my-modal-3'
            className='btn  btn-sm btn-circle bg-active absolute right-2 top-2'
          >
            ✕
          </label>
          {submitted ? (
            <div className='h-[130px] flex flex-col items-center'>
              <h3 className='text-lg text-center tracking-wide font-bold mb-5'>
                Thanks for filling your details
              </h3>
              <a
                download
                href={`https:${DownloadLink}`}
                className='  bg-active  text-center cursor-pointer rounded-md text-white py-2 px-4 lg:px-4 capitalize'
              >
                DOWNLOAD YOUR FORM
              </a>

              <p className='text-center mt-3 text-sm'>
                After downloading your form go to the IGR for payment <br /> or
                click
                <a
                  className='underline italic font-semibold text-newgreen'
                  href='https://eirs.gov.ng/'
                >
                  here
                </a>
              </p>
            </div>
          ) : (
            <>
              <h3 className='text-lg text-center tracking-wide font-bold mb-5'>
                Kindly, fill in your details
              </h3>
              <div className=' h-[130px] flex flex-col items-center'>
                <Input textColor='newgreen' id='name' label='your name' />
                <Input textColor='newgreen' id='email' label='your email' />

                <button
                  className='bg-active w-full  text-center cursor-pointer rounded-md text-white py-2 px-4 lg:px-4 capitalize'
                  type='submit'
                  onClick={() => setSubmitted(true)}
                >
                  SUBMIT
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* <style jsx>{``}</style> */}
    </>
  )
}

export default RegistrationModal
