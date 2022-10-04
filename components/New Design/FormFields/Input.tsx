type props = {
  label: string
  textColor: string
  id: string
  textarea?: boolean
}

const Input = ({ label, textColor, id, textarea }: props) => {
  return (
    <div className='flex flex-col '>
      <label
        htmlFor={id}
        className='  rounded-full font-semibold capitalize pl-3 text-newgreen text-base'
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          name='message'
          id='message'
          cols={30}
          rows={10}
          className='bg-lightgray rounded-[36px] text-newgreen focus:outline-dotted '
        ></textarea>
      ) : (
        <input
          type='email'
          name=''
          id={id}
          className='bg-lightgray px-5 text-newgreen focus:outline-dotted rounded-full lg:h-10 lg:w-full '
        />
      )}
    </div>
  )
}

export default Input
