import { styled } from "@/lib/stitches"
import Box from "../Box"
import { forwardRef, useRef, useImperativeHandle } from "react"

const StyledFlex = styled(Box, {
  display: "flex",
  variants: {
    dir: {
      row: {
        flexDirection: "row",
      },
      "row-reverse": {
        flexDirection: "row-reverse",
      },
      col: {
        flexDirection: "column",
      },
      "col-reverse": {
        flexDirection: "column",
      },
    },
    center: {
      horizontal: {},
      vertical: {},
      true: {
        alignItems: "center",
        justifyContent: "center",
      },
    },
  },

  compoundVariants: [
    {
      center: "horizontal",
      dir: "col",
      css: {
        alignItems: "center",
      },
    },
    {
      center: "vertical",
      dir: "col",
      css: {
        justifyContent: "center",
      },
    },
    {
      center: "horizontal",
      dir: "col-reverse",
      css: {
        alignItems: "center",
      },
    },
    {
      center: "vertical",
      dir: "col-reverse",
      css: {
        justifyContent: "center",
      },
    },
    {
      center: "vertical",
      dir: "row",
      css: {
        alignItems: "center",
      },
    },
    {
      center: "horizontal",
      dir: "row",
      css: {
        justifyContent: "center",
      },
    },
    {
      center: "vertical",
      dir: "row-reverse",
      css: {
        alignItems: "center",
      },
    },
    {
      center: "horizontal",
      dir: "row-reverse",
      css: {
        justifyContent: "center",
      },
    },
  ],

  defaultVariants: {
    dir: "row",
  },
})

/**
 * @typedef {typeof StyledFlex} StyledFlexType
 * @type {React.ForwardRefExoticComponent<
 *  {gap?: import("@stitches/react").ScaleValue<"space">}
 *   React.ComponentPropsWithoutRef<StyledFlexType> &
 *     React.RefAttributes<StyledFlexType>
 * >}
 */
const Flex = forwardRef((props, ref) => {
  const flexRef = useRef()

  useImperativeHandle(ref, () => flexRef.current)

  const { gap, ...restProps } = props

  if (gap) {
    restProps.css = Object.assign(restProps.css ?? {}, { gap })
  }

  return <StyledFlex {...restProps} ref={flexRef} />
})

export default Flex
