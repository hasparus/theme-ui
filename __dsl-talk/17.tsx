// Module Augmentation
// https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation

import { UserTheme } from '@theme-ui/css'

declare module '@theme-ui/css' {
  interface A {
    a: number
  }
}
