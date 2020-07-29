/** @jsx jsx */
import { makeTheme } from '@theme-ui/css/dist/exact-theme'
import { jsx } from 'theme-ui'
import { css } from '@theme-ui/css'

const gray = {
  'gray-1': '#f5f5f5',
  'gray-2': '#eeeeee',
  'gray-3': '#e0e0e0',
  'gray-4': '#bdbdbd',
  'gray-5': '#9e9e9e',
  'gray-6': '#757575',
  'gray-7': '#616161',
  'gray-8': '#424242',
  'gray-9': '#212121',
}

const theme = makeTheme({
  colors: {
    primary: '#00f',
    text: '#000',
    background: '#fff',
    ...gray,
    modes: {
      dark: {
        primary: '#00f',
        text: '#fff',
        background: '#000',
        ...gray,
      },
    },
  },
})

type MyTheme = typeof theme

declare module '@theme-ui/css' {
  export interface UserTheme extends MyTheme {}
}

const _ = (
  <div
    sx={{
      color: ['background', 'gray-5', 'gray-3'],
    }}
  />
)
