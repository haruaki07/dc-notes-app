import clsx from "clsx"
import styles from "./container.module.scss"

/** @type {React.FC<React.ComponentProps<"div"> & { center?: boolean }>>} */
const Container = ({ children, center, className, ...restProps }) => {
  return (
    <div
      className={clsx(
        styles.container,
        center && styles.containerCenter,
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  )
}

export default Container
