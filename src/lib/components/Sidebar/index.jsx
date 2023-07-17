import Text from "@/lib/ui/Text"
import IconArchive from "../Icons/Archive"
import IconNote from "../Icons/Note"
import styles from "./sidebar.module.scss"
import { useState } from "react"
import clsx from "clsx"
import Flex from "@/lib/ui/Flex"

const SIDEBAR_ITEMS = [
  {
    icon: <IconNote />,
    text: "Notes",
    value: "notes",
  },
  {
    icon: <IconArchive />,
    text: "Archive",
    value: "archive",
  },
]

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("notes")

  /** @param {(typeof SIDEBAR_ITEMS)[0]} item */
  const handleItemClick = (item) => {
    setActiveItem(item.value)
  }

  return (
    <div className={styles.sidebarWrapper}>
      <div></div>
      <div className={styles.sidebar}>
        {SIDEBAR_ITEMS.map((item) => (
          <button
            type="button"
            className={clsx(
              styles.sidebarItem,
              activeItem === item.value && styles.sidebarItemActive
            )}
            onClick={() => handleItemClick(item)}
          >
            <Flex as="span" center className={styles.sidebarItemIcon}>
              {item.icon}
            </Flex>
            <Text className={styles.sidebarItemText}>{item.text}</Text>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
