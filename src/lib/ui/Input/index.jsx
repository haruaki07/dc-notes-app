import React, { forwardRef, useRef, useImperativeHandle } from "react"
import { styled } from "@/lib/stitches"

const StyledInputRoot = styled("div", {
  position: "relative",

  variants: {
    fullWidth: {
      true: {
        width: "$full",
      },
    },
  },
})

const StyledInput = styled("input", {
  background: "$gray4",
  border: "$gray4 solid 1px",
  rounded: "$sm",

  "&:focus": {
    background: "white",
    outline: "none",
    boxShadow: "0px 1px 1px 0px rgba(0,0,0,0.25)",
  },

  "&::placeholder": {
    color: "$gray11",
  },

  variants: {
    size: {
      sm: {
        rounded: "$xs",
        fontSize: "$xs",
        p: "$4",
      },

      md: {
        fontSize: "$sm",
        p: "$6",
      },

      lg: {
        fontSize: "$md",
        p: "$6 $8",
      },
    },
    withIcons: {
      true: {},
    },
    fullWidth: {
      true: { width: "$full" },
    },
  },

  compoundVariants: [
    {
      size: "sm",
      withIcons: true,
      css: {
        pl: "$12",
      },
    },
    {
      size: "md",
      withIcons: true,
      css: {
        pl: "$14",
      },
    },
    {
      size: "lg",
      withIcons: true,
      css: {
        pl: "$16",
      },
    },
  ],

  defaultVariants: {
    size: "md",
  },
})

const StyledIconWrapper = styled("div", {
  position: "absolute",
  color: "$gray11",

  variants: {
    size: {
      sm: {
        top: "$2",
        left: "$3",
      },
      md: {
        top: "$5",
        left: "$5",
      },
      lg: {
        top: "$6",
        left: "$6",
      },
    },
  },

  defaultVariants: {
    size: "md",
  },
})

/**
 * @typedef {typeof StyledInput} StyledInputType
 * @type {React.ForwardRefExoticComponent<
 *   {
 *     icon?: React.ReactNode
 *   } & React.ComponentPropsWithoutRef<StyledInputType> &
 *     React.RefAttributes<StyledInputType>
 * >}
 */
const Input = forwardRef((props, ref) => {
  const inputRef = useRef()

  const { icon, fullWidth = false, ...restProps } = props

  useImperativeHandle(ref, () => inputRef.current)

  return (
    <StyledInputRoot fullWidth={fullWidth}>
      {icon && (
        <StyledIconWrapper size={restProps.size}>{icon}</StyledIconWrapper>
      )}
      <StyledInput
        withIcons={!!icon}
        fullWidth={fullWidth}
        {...restProps}
        ref={inputRef}
      />
    </StyledInputRoot>
  )
})

export default Input
