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
 *     React.ComponentProps<HTMLElement> & {
 *       as?: string;
 *       inline?: boolean
 *       gap?: number
 *       direction?: "row" | "row-reverse" | "col" | "col-reverse"
 *       center?: "vertical" | "horizontal" | true
 *     }
 *   >
 * >}
 */
const Flex = (props) => {
  const {
    as: Cmp = "div",
    inline,
    gap,
    direction = "row",
    center,
    className,
    ...restProps
  } = props

  return (
    <Cmp
      className={clsx(
        styles.flex,
        inline && styles.flexInline,
        flexDirectionStyle[direction],
        center && flexCenterStyle[center],
        className
      )}
      style={{ gap }}
      {...restProps}
    ></Cmp>
  )
}

export default Flex
