/** @type {React.FC<React.PropsWithChildren<{}>>} */

import Navbar from "@/lib/components/Navbar"
import Flex from "@/lib/ui/Flex"
import styles from "./applayout.module.scss"
import Sidebar from "@/lib/components/Sidebar"

/** @type {React.FC<React.PropsWithChildren>} */
const AppLayout = ({ children }) => {
  return (
    <Flex className={styles.root}>
      <Navbar />
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.mainContent}>{children}</div>
      </div>
    </Flex>
  )
}

export default AppLayout
