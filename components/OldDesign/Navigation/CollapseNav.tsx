import Link from 'next/link'

type Props = {
  title: string
  items?: string[]
  url: string
  status: boolean
  setStatus: React.Dispatch<React.SetStateAction<boolean>>
}

const CollapseNav = ({title, items, url, setStatus, status}: Props) => {
  return (
    <div>
      {/* checks if items is true */}
      {!items ? (
        <div className='collapse' onClick={() => setStatus(!status)}>
          <Link href={url}>
            <a className='collapse-title cursor-pointer text-xl my-4 font-semibold hover:text-[#005410] duration-150 ease-in-out'>
              {title}
            </a>
          </Link>
        </div>
      ) : (
        <div
          tabIndex={0}
          className='collapse collapse-arrow  bg-base-100 rounded-box'
        >
          {/* <Link href={url}> */}
          <a className='collapse-title cursor-pointer text-xl mb-4 font-semibold hover:text-[#005410] duration-150 ease-in-out'>
            {title}
          </a>
          {/* </Link> */}
          <ol className='collapse-content'>
            {items.map(item => (
              <li className='py-2 border-b-2' key={item}>
                {item}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  )
}

export default CollapseNav
