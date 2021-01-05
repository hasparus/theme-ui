import { ExactTheme } from '../src/theme'

declare module '@theme-ui/css' {
  interface UserTheme extends ExactTheme {}
}
