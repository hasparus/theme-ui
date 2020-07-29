// Declaration Merging
// https://www.typescriptlang.org/docs/handbook/declaration-merging.html#merging-interfaces

interface AB {
  a: number
}

interface AB {
  b: string
}

const foo: AB = {}

//#region UserTheme

import { css } from '@theme-ui/css'

// declare module '@theme-ui/css' {
//   export interface UserTheme {
//     sayHi(): 'Hello folks!'
//   }
// }

css((theme) => {
  // theme.sayHi()

  return {}
})

//#endregion
