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

/**
 * @type {React.FC<{
 *   expand: boolean
 *   active: "notes" | "archive"
 *   onChange?: (value: string) => void
 * }>}
 */
const Sidebar = ({ expand, active, onChange }) => {
  const [activeItem, setActiveItem] = useState(active)

  /** @param {(typeof SIDEBAR_ITEMS)[0]} item */
  const handleItemClick = (item) => {
    setActiveItem(item.value)
    onChange?.(item.value)
  }

  return (
    <div
      className={clsx(styles.sidebarWrapper, expand && styles.sidebarExpanded)}
    >
      <div className={styles.sidebar}>
        {SIDEBAR_ITEMS.map((item) => (
          <button
            key={item.value}
            type="button"
            className={clsx(
              styles.sidebarItem,
              activeItem === item.value && styles.sidebarItemActive
            )}
            onClick={() => handleItemClick(item)}
            title={item.text}
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
