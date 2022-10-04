type Props = {
  children: React.ReactNode
}

const PageHeader = ({ children }: Props) => {
  return (
    <div className=' text-center w-full lg:h-72 bg-[url("/New/image31.png")] bg-cover'>
      {children}
    </div>
  )
}

export default PageHeader
