/** @jsx jsx */
import { jsx } from 'theme-ui'

const NotOverTheRainbowYet = () => {
  return (
    <div
      sx={{
        bg: 'primry', // typo
        size: [
          '100px', // arbitrary value
          '1234p', // arbitrary value and a typo
        ],
      }}
    />
  )
}
