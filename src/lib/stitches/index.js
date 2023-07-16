import { createStitches } from "@stitches/react"
import { themeCommon } from "./theme"
import * as Stitches from "@stitches/react"

export const { styled, getCssText, theme, config, css, keyframes } =
  createStitches({
    theme: {
      ...themeCommon,
    },
    media: {
      xxs: `(min-width: ${themeCommon.breakpoints.xxs})`,
      xs: `(min-width: ${themeCommon.breakpoints.xs})`,
      sm: `(min-width: ${themeCommon.breakpoints.sm})`,
      md: `(min-width: ${themeCommon.breakpoints.md})`,
      lg: `(min-width: ${themeCommon.breakpoints.lg})`,
      xl: `(min-width: ${themeCommon.breakpoints.xl})`,
      xxsMax: `(max-width: ${themeCommon.breakpoints.xxs})`,
      xsMax: `(max-width: ${themeCommon.breakpoints.xs})`,
      smMax: `(max-width: ${themeCommon.breakpoints.sm})`,
      mdMax: `(max-width: ${themeCommon.breakpoints.md})`,
      lgMax: `(max-width: ${themeCommon.breakpoints.lg})`,
      xlMax: `(max-width: ${themeCommon.breakpoints.xl})`,
      motion: "(prefers-reduced-motion: reduce)",
      safari: "not all and (min-resolution:.001dpcm)",
      hover: "(any-hover: hover)",
      dark: "(prefers-color-scheme: dark)",
      light: "(prefers-color-scheme: light)",
    },
    utils: {
      // margin
      /** @param {Stitches.ScaleValue<"space">} value */
      m: (value) => ({
        margin: value,
      }),
      /** @param {Stitches.ScaleValue<"space">} value */
      mt: (value) => ({
        marginTop: value,
      }),
      /** @param {Stitches.ScaleValue<"space">} value */
      mr: (value) => ({
        marginRight: value,
      }),
      /** @param {Stitches.ScaleValue<"space">} value */
      mb: (value) => ({
        marginBottom: value,
      }),
      /** @param {Stitches.ScaleValue<"space">} value */
      ml: (value) => ({
        marginLeft: value,
      }),
      /** @param {Stitches.ScaleValue<"space">} value */
      mx: (value) => ({
        marginLeft: value,
        marginRight: value,
      }),
      /** @param {Stitches.ScaleValue<"space">} value */
      my: (value) => ({
        marginTop: value,
        marginBottom: value,
      }),

      // padding
      /** @param {Stitches.ScaleValue<"space">} value */
      p: (value) => ({
        padding: value,
      }),
      /** @param {Stitches.ScaleValue<"space">} value */
      pt: (value) => ({
        paddingTop: value,
      }),
      /** @param {Stitches.ScaleValue<"space">} value */
      pr: (value) => ({
        paddingRight: value,
      }),
      /** @param {Stitches.ScaleValue<"space">} value */
      pb: (value) => ({
        paddingBottom: value,
      }),
      /** @param {Stitches.ScaleValue<"space">} value */
      pl: (value) => ({
        paddingLeft: value,
      }),
      /** @param {Stitches.ScaleValue<"space">} value */
      px: (value) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      /** @param {Stitches.ScaleValue<"space">} value */
      py: (value) => ({
        paddingTop: value,
        paddingBottom: value,
      }),

      /** @param {Stitches.ScaleValue<"sizes">} value */
      size: (value) => ({
        width: value,
        height: value,
      }),

      // border radius
      /** @param {Stitches.ScaleValue<"radii">} value */
      rounded: (value) => ({
        borderTopLeftRadius: value,
        borderTopRightRadius: value,
        borderBottomLeftRadius: value,
        borderBottomRightRadius: value,
      }),
      /** @param {Stitches.ScaleValue<"radii">} value */
      roundedTop: (value) => ({
        borderTopLeftRadius: value,
        borderTopRightRadius: value,
      }),
      /** @param {Stitches.ScaleValue<"radii">} value */
      roundedRight: (value) => ({
        borderTopRightRadius: value,
        borderBottomRightRadius: value,
      }),
      /** @param {Stitches.ScaleValue<"radii">} value */
      roundedBottom: (value) => ({
        borderBottomLeftRadius: value,
        borderBottomRightRadius: value,
      }),
      /** @param {Stitches.ScaleValue<"radii">} value */
      roundedLeft: (value) => ({
        borderTopLeftRadius: value,
        borderBottomLeftRadius: value,
      }),
    },
  })

/**
 * @typedef {import("@stitches/react").CSS<typeof config>} CSS
 *
 * @typedef {typeof theme} StitchesTheme
 */
