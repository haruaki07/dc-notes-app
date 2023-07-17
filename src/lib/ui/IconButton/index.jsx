import clsx from "clsx"
import styles from "./iconbutton.module.scss"

const sizeStyle = {
  sm: styles.iconButtonSm,
  md: styles.iconButtonMd,
}

const colorStyle = {
  default: null,
  red: styles.iconButtonRed,
}

/**
 * @type {React.FC<
 *   React.PropsWithChildren<
 *     React.ComponentProps<"button"> & {
 *       size?: "sm" | "md"
 *       color?: "red" | "default"
 *     }
 *   >
 * >}
 */
const IconButton = (props) => {
  const { size = "md", color = "default", children, ...restProps } = props

  return (
    <button
      type="button"
      className={clsx(styles.iconButton, sizeStyle[size], colorStyle[color])}
      {...restProps}
    >
      {children}
    </button>
  )
}

export default IconButton
