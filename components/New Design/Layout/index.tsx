import { Footer } from "components"
import Image from "next/image"
import Navigation from "../Navigation"

type Props = {
  children: React.ReactNode
  navColor: string
}
const Layout = ({ children, navColor }: Props) => {
  return (
    <>
      <Navigation navColor={navColor} />
      <Image
        src='/New/medical-insurance.gif'
        height={80}
        width={80}
        alt='medical insurance gif'
      />
      {children}
      <Footer />
    </>
  )
}

export default Layout
