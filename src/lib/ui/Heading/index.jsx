import { styled } from "@/lib/stitches"
import { forwardRef, useImperativeHandle, useRef } from "react"
import Text from "../Text"

const StyledHeading = styled(Text, {
  color: "$gray11",

  variants: {
    level: {
      1: {
        fontWeight: "$bold",
        fontSize: "$3xl",
      },
      2: {
        fontWeight: "$bold",
        fontSize: "$2xl",
      },
      3: {
        fontWeight: "$semibold",
        fontSize: "$1xl",
      },
      4: {
        fontWeight: "$semibold",
        fontSize: "$xl",
      },
      5: {
        fontWeight: "$medium",
        fontSize: "$lg",
      },
      6: {
        fontWeight: "$medium",
        fontSize: "$md",
      },
    },
  },

  defaultVariants: {
    level: "5",
  },
})

/**
 * @typedef {typeof StyledHeading} StyledHeadingType
 * @type {React.ForwardRefExoticComponent<
 *   React.ComponentPropsWithoutRef<StyledHeadingType> &
 *     React.RefAttributes<StyledHeadingType>
 * >}
 */
const Heading = forwardRef((props, ref) => {
  const headingRef = useRef(null)

  const { level = 5, ...restProps } = props

  useImperativeHandle(ref, () => headingRef.current)

  return <StyledHeading as={`h${level}`} {...restProps} ref={headingRef} />
})

export default Heading
