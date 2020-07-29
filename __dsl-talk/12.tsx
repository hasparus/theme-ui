/** @jsx jsx */
import { jsx } from 'theme-ui'

const PrimaryBox = () => {
  return (
    <div
      sx={{
        size: ['small', 'medium'],
        bg: 'primary',
      }}
    />
  )
}

//#region somewhere else higher up in the tree

import { ThemeProvider, Theme } from 'theme-ui'

const theme: Theme = {
  space: {
    small: '100px',
    medium: '400px',
  },
  colors: {
    primary: '#00f',
    text: '#111',
    background: '#fff',
  },
}

const Provider = (children: React.ReactNode) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

//#endregion
