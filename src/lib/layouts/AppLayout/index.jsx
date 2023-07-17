/** @type {React.FC<React.PropsWithChildren<{}>>} */

import Navbar from "@/lib/components/Navbar"
import Flex from "@/lib/ui/Flex"
import styles from "./applayout.module.scss"
import Sidebar from "@/lib/components/Sidebar"
import { useState } from "react"

/** @type {React.FC<React.PropsWithChildren>} */
const AppLayout = ({ children }) => {
  const [sidebarExpand, setSidebarExpand] = useState(true)

  return (
    <Flex className={styles.root}>
      <Navbar onSidebarToggle={() => setSidebarExpand(!sidebarExpand)} />
      <div className={styles.main}>
        <Sidebar expand={sidebarExpand} />
        <div className={styles.mainContent}>{children}</div>
      </div>
    </Flex>
  )
}

export default AppLayout
