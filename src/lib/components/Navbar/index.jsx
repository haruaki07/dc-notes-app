import IconSearch from "@/lib/components/Icons/Search"
import Flex from "@/lib/ui/Flex"
import Heading from "@/lib/ui/Heading"
import IconButton from "@/lib/ui/IconButton"
import TextField from "@/lib/ui/TextField"
import clsx from "clsx"
import { useEffect, useState } from "react"
import IconMenu from "../Icons/Menu"
import LogoImg from "./LogoImg"
import styles from "./navbar.module.scss"

/**
 * @type {React.FC<{
 *   onSidebarToggle: (value: boolean) => void
 *   onSearch: (keywords: string) => void
 * }>}
 */
const Navbar = ({ onSidebarToggle, onSearch }) => {
  const [keywords, setKeywords] = useState("")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () =>
      setScrolled(document.documentElement.scrollTop > 0)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  /** @param {React.SyntheticEvent<HTMLInputElement>} e */
  const handleOnSearch = (e) => {
    const val = e.currentTarget.value
    setKeywords(val)
    onSearch(val)
  }

  return (
    <div className={clsx(styles.navbarRoot, scrolled && styles.scrolled)}>
      <Flex center="vertical" gap="0.75rem">
        <IconButton onClick={onSidebarToggle}>
          <IconMenu />
        </IconButton>
        <a className={styles.navbarLogo} href="/">
          <LogoImg />
          <Heading level="5">Notes App</Heading>
        </a>
      </Flex>
      <TextField
        fullWidth
        size="lg"
        type="search"
        placeholder="Search"
        className={styles.navbarSearch}
        icon={<IconSearch />}
        value={keywords}
        onChange={handleOnSearch}
      />
    </div>
  )
}

export default Navbar
