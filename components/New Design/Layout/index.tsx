import { NewFooter } from "components"
import Navigation from "../Navigation"

type Props = {
  children: React.ReactNode
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <Navigation />
      {children}
      <NewFooter />
    </>
  )
}

export default Layout
