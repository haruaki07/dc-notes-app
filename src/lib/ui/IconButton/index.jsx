import styles from "./iconbutton.module.scss"

/** @type {React.FC<React.PropsWithChildren<React.ComponentProps<"button">>>} */
const IconButton = (props) => {
  const { children, ...restProps } = props

  return (
    <button type="button" className={styles.iconButton} {...restProps}>
      {children}
    </button>
  )
}

export default IconButton
