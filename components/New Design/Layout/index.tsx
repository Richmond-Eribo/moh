import { NewFooter } from "components"
import Navigation from "../Navigation"

type Props = {
  children: React.ReactNode
  navColor: string
}
const Layout = ({ children, navColor }: Props) => {
  return (
    <>
      <Navigation navColor={navColor} />
      {children}
      <NewFooter />
    </>
  )
}

export default Layout
