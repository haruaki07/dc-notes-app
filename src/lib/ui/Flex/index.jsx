import clsx from "clsx"
import React, { forwardRef } from "react"
import styles from "./flex.module.scss"

const flexDirectionStyle = {
  col: styles.flexCol,
  "col-reverse": styles.flexColReverse,
  row: styles.flexRow,
  "row-reverse": styles.flexRowReverse,
}

const flexCenterStyle = {
  vertical: styles.flexCenterVertical,
  horizontal: styles.flexCenterHorizontal,
  true: styles.flexCenter,
}

/**
 * @type {React.FC<
 *   React.PropsWithChildren<
 *     React.ComponentProps<"div"> & {
 *       gap?: number
 *       direction?: "row" | "row-reverse" | "col" | "col-reverse"
 *       center?: "vertical" | "horizontal" | true
 *     }
 *   >
 * >}
 */
const Flex = (props) => {
  const { gap, direction = "row", center, className, ...restProps } = props

  return (
    <div
      className={clsx(
        styles.flex,
        flexDirectionStyle[direction],
        center && flexCenterStyle[center],
        className
      )}
      style={{ gap }}
      {...restProps}
    ></div>
  )
}

export default Flex
