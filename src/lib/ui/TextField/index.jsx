import clsx from "clsx"
import styles from "./textfield.module.scss"

const inputSizeStyle = {
  sm: styles.inputSm,
  md: styles.inputMd,
  lg: styles.inputLg,
}

/**
 * @typedef {{
 *   icon?: React.ReactNode
 *   fullWidth?: boolean
 *   size?: "sm" | "md" | "lg"
 * }} InputProps
 * @type {React.FC<
 *   React.PropsWithRef<
 *     Omit<React.ComponentProps<"input">, keyof InputProps> & InputProps
 *   >
 * >}
 */
const TextField = (props) => {
  const { icon, fullWidth = false, size = "md", ...restProps } = props

  return (
    <div
      className={clsx(styles.inputWrapper, fullWidth && styles.inputfullWidth)}
    >
      {icon && (
        <div className={clsx(styles.inputIconWrapper, inputSizeStyle[size])}>
          {icon}
        </div>
      )}
      <input
        type="text"
        className={clsx(
          styles.input,
          inputSizeStyle[size],
          !!icon && styles.inputWithIcons
        )}
        {...restProps}
      />
    </div>
  )
}

export default TextField
