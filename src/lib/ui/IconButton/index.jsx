import { styled } from "@/lib/stitches"
import { forwardRef, useImperativeHandle, useRef } from "react"

const StyledIconButton = styled("button", {
  border: "none",
  outline: "none !important",
  background: "white",
  color: "$gray11",
  p: "$6",
  rounded: "$pill",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "&:hover": {
    background: "$gray4",
    cursor: "pointer",
  },
})

/**
 * @typedef {typeof StyledIconButton} StyledIconButtonType
 * @type {React.ForwardRefExoticComponent<
 *   React.ComponentPropsWithoutRef<StyledIconButtonType> &
 *     React.RefAttributes<StyledIconButtonType>
 * >}
 */
const IconButton = forwardRef((props, ref) => {
  const buttonRef = useRef()

  const { children, ...restProps } = props

  useImperativeHandle(ref, () => buttonRef.current)

  return <StyledIconButton children={children} {...restProps} />
})

export default IconButton
