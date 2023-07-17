import clsx from "clsx"
import React, { useEffect, useState } from "react"
import styles from "./textfield.module.scss"

const inputSizeStyle = {
  sm: styles.inputSm,
  md: styles.inputMd,
  lg: styles.inputLg,
}

const inputVariantStyle = {
  transparent: styles.inputVariantTransparent,
}

/**
 * @typedef {{
 *   icon?: React.ReactNode
 *   fullWidth?: boolean
 *   size?: "sm" | "md" | "lg"
 *   variant?: "transparent"
 *   autoGrow?: boolean | number
 *   multiLine?: boolean | number
 * }} InputProps
 * @type {React.FC<
 *   React.PropsWithRef<
 *     Omit<React.ComponentProps<"input">, keyof InputProps> & InputProps
 *   >
 * >}
 */
const TextField = (props) => {
  const {
    icon,
    fullWidth = false,
    size = "md",
    variant,
    className,
    autoGrow,
    multiLine = false,
    onInput,
    ...restProps
  } = props
  const defaultRows = 2

  const [rows, setRows] = useState(
    typeof multiLine === "boolean" ? defaultRows : multiLine
  )

  if (autoGrow && !multiLine)
    throw new Error("[TextField]: autoGrow only works when multiLine enabled!")

  /** @param {React.SyntheticEvent<HTMLTextAreaElement>} e */
  const handleAutoGrow = (e) => {
    const maxRows = typeof autoGrow === "boolean" ? Infinity : autoGrow
    const computedStyle = window.getComputedStyle(e.currentTarget)
    const paddingY =
      (parseFloat(computedStyle.paddingTop.slice(0, -2)) ?? 0) +
      (parseFloat(computedStyle.paddingBottom.slice(0, -2)) ?? 0)
    const textareaLineHeight =
      1.5 * parseFloat(computedStyle.fontSize.slice(0, -2)) ?? 14 // hardcoded line-height (1.5x fontsize)

    const previousRows = rows
    e.currentTarget.rows =
      typeof multiLine === "boolean" ? defaultRows : multiLine // reset rows

    const currentRows = ~~(
      (e.currentTarget.scrollHeight - paddingY) /
      textareaLineHeight
    )

    if (currentRows === previousRows) {
      e.currentTarget.rows = currentRows
    }

    if (currentRows >= maxRows) {
      e.currentTarget.rows = maxRows
      e.currentTarget.scrollTop = e.currentTarget.scrollHeight
    }

    setRows(currentRows < maxRows ? currentRows : maxRows)
  }

  /** @param {React.SyntheticEvent<HTMLTextAreaElement>} e */
  const handleTextareaInput = (e) => {
    onInput?.(e)
    handleAutoGrow(e)
  }

  return (
    <div
      className={clsx(
        styles.inputWrapper,
        fullWidth && styles.inputfullWidth,
        className
      )}
    >
      {icon && (
        <div className={clsx(styles.inputIconWrapper, inputSizeStyle[size])}>
          {icon}
        </div>
      )}
      {multiLine ? (
        <textarea
          rows={rows}
          className={clsx(
            styles.input,
            inputSizeStyle[size],
            !!icon && styles.inputWithIcons,
            variant && inputVariantStyle[variant]
          )}
          onInput={handleTextareaInput}
          {...restProps}
        />
      ) : (
        <input
          type="text"
          className={clsx(
            styles.input,
            inputSizeStyle[size],
            !!icon && styles.inputWithIcons,
            variant && inputVariantStyle[variant]
          )}
          {...restProps}
        />
      )}
    </div>
  )
}

export default TextField
