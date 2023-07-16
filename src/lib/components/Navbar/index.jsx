import { styled } from "@/lib/stitches"
import HeadingStyled from "@/lib/ui/Heading"
import { useEffect, useState } from "react"
import LogoImg from "./LogoImg"
import Input from "@/lib/ui/Input"
import IconSearch from "@/lib/components/Icons/Search"
import IconMenu from "../Icons/Menu"
import Flex from "@/lib/ui/Flex"
import IconButton from "@/lib/ui/IconButton"

const NavbarRoot = styled("div", {
  display: "flex",
  flexShrink: 0,
  alignItems: "center",
  justifyContent: "space-between",
  position: "fixed",
  top: 0,
  left: 0,
  borderBottom: "$gray6 1px solid",
  background: "white",
  width: "$full",
  height: 64,
  p: "$2 $6",
  zIndex: "$5",

  variants: {
    scrolled: {
      true: {
        boxShadow: "0px 1px 5px 0px rgba(0,0,0,0.1)",
      },
    },
  },
})

const Logo = styled("a", {
  display: "flex",
  alignItems: "center",
  gap: "$8",
  textDecoration: "none",
  "&:hover": {
    h5: { textDecoration: "underline", textDecorationThickness: "$sizes$1" },
  },
})

/** @type {React.FC<{}>} */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () =>
      setScrolled(document.documentElement.scrollTop > 0)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <NavbarRoot scrolled={scrolled}>
      <Flex center="vertical" gap="$6">
        <IconButton>
          <IconMenu />
        </IconButton>
        <Logo href="/">
          <LogoImg />
          <HeadingStyled level="5">Notes App</HeadingStyled>
        </Logo>
      </Flex>
      <Input
        type="search"
        placeholder="Search"
        icon={<IconSearch />}
        size="lg"
      />
    </NavbarRoot>
  )
}

export default Navbar
