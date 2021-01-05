/** @jsxImportSource theme-ui */

import { Global } from '@emotion/react'
import { createElement, memo } from 'react'
import { ThemeProvider, Themed } from 'theme-ui'
// todo: move to theme-ui import
import { makeTheme } from '../../../packages/css/src/exact-theme';

const customTheme = makeTheme({
  colors: {
    primary: 'red',
    'primary-dark': 'darkred'
  }
});

export type ExactTheme = typeof customTheme;

const CustomThemeProvider = memo(({ children, ...props }) => (
  <ThemeProvider theme={customTheme} {...props}>
    <Themed.root>{children}</Themed.root>
  </ThemeProvider>
))

const Reset = () =>
  createElement(Global, {
    styles: {
      body: {
        margin: '0',
      },
    },
  })

export { Reset, CustomThemeProvider as default }
