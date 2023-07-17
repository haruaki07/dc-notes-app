import React from "react"
import Text from "../Text"
import styles from "./heading.module.scss"
import clsx from "clsx"

/**
 * @type {React.FC<
 *   React.PropsWithChildren<
 *     {
 *       level: "1" | "2" | "3" | "4" | "5" | "6"
 *     } & React.HTMLAttributes<HTMLHeadingElement>
 *   >
 * >}
 */
const Heading = (props) => {
  const { level = "5", className, ...restProps } = props

  return (
    <Text
      as={`h${level}`}
      className={clsx(styles.heading, styles[`heading${level}`], className)}
      {...restProps}
    ></Text>
  )
}

export default Heading
