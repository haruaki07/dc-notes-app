/** @type {React.FC<React.PropsWithChildren<{}>>} */

import Navbar from "@/lib/components/Navbar"
import Flex from "@/lib/ui/Flex"
import styles from "./applayout.module.scss"

/** @type {React.FC<React.PropsWithChildren>} */
const AppLayout = ({ children }) => {
  return (
    <Flex className={styles.root}>
      <Navbar />
      <div className={styles.mainWrapper}>{children}</div>
    </Flex>
  )
}

export default AppLayout
