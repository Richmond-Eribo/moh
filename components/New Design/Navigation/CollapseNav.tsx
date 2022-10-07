import Link from "next/link"

type Props = {
  title: string
  items?: any
  url: string
  status: boolean
  setStatus: React.Dispatch<React.SetStateAction<boolean>>
}

const CollapseNav = ({ title, items, url, setStatus, status }: Props) => {
  return (
    <div>
      {/* checks if items is true */}
      {!items ? (
        <div className='collapse' onClick={() => setStatus(!status)}>
          <Link href={url}>
            <a className='collapse-title cursor-pointer text-xl my-2 font-semibold hover:text-[#005410] duration-150 ease-in-out'>
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
          <a className='collapse-title cursor-pointer text-xl mb-3 font-semibold hover:text-[#005410] duration-150 ease-in-out'>
            {title}
          </a>
          {/* </Link> */}
          <ol className='collapse-content'>
            {items.map((item: any) => (
              <Link key={item.item} href={item.url}>
                <li className='py-2 border-b-2'>
                  <a onClick={() => setStatus(!status)}>{item.item}</a>
                </li>
              </Link>
            ))}
          </ol>
        </div>
      )}
    </div>
  )
}

export default CollapseNav
