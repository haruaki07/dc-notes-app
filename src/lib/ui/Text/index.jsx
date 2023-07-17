import styles from "./text.module.scss"
import clsx from "clsx"

/**
 * @type {React.FC<
 *   React.PropsWithChildren<
 *     React.HTMLAttributes<HTMLElement> & { as?: string }
 *   >
 * >}
 */
const Text = (props) => {
  const { as: Cmp = "p", className, ...restProps } = props

  return <Cmp className={clsx(styles.text, className)} {...restProps}></Cmp>
}

export default Text
