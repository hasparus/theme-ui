import { CustomVerticalRhythm } from '@theme-ui/typography'

const typography: CustomVerticalRhythm = {
  options: {
    baseFontSize: 0,
    baseLineHeight: 0,
    blockMarginBottom: 0,
    bodyFontFamily: [],
    bodyWeight: '',
    googleFonts: [],
    headerFontFamily: [],
    headerWeight: '',
    boldWeight: '',
    headerLineHeight: 0,
    includeNormalize: false,
    scaleRatio: 0,
  },
  // Object literal may only specify known properties,
  // and 'rhythm' does not exist in type 'CustomVerticalRhythm'.ts(2322)
  rhythm: value => String(value),
  // Notice that this is okay after copying this object into typography/src/index.ts
}
