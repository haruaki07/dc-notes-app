/** @type {React.FC<React.PropsWithChildren<{}>>} */

import Navbar from "../components/Navbar"
import { styled } from "../stitches"

const Root = styled("div", {
  width: "$full",
  height: `$full`,
  display: "flex",
  flexDirection: "column",
})

const MainWrapper = styled("div", {
  flexGrow: 1,
})

const AppLayout = ({ children }) => {
  return (
    <Root>
      <Navbar />
      <MainWrapper>{children}</MainWrapper>
    </Root>
  )
}

export default AppLayout
