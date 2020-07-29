/** @jsx jsx */
import { jsx } from '@emotion/core'

import { breakpoints } from './theme'

const PrimaryBox = () => {
  return (
    // embedded DSL?
    <div
      // embedded DSL!
      css={{
        width: '100px',
        height: '100px',
        backgroundColor: '#00f',
        [breakpoints.tablet]: {
          width: '200px',
          height: '200px',
        },
      }}
    />
  )
}
