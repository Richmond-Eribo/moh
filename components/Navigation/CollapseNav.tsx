import Link from 'next/link'

type Props = {
  title: string
  items?: string[]
  url: string
}

const CollapseNav = ({title, items, url}: Props) => {
  return (
    <div>
      {/* checks if items is true */}
      {!items ? (
        <Link href={url}>
          <div className='collapse'>
            <a className='collapse-title cursor-pointer text-xl my-4 font-semibold hover:text-[#005410] duration-150 ease-in-out'>
              {title}
            </a>
          </div>
        </Link>
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
