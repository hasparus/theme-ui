/** @jsxImportSource theme-ui */

import ReactDOM from 'react-dom'
import { Themed } from 'theme-ui'

import ThemeProvider, { Reset } from './theme'

function App() {
  return (
    <ThemeProvider>
      <div sx={{ p: 3 }}>
        <Reset />
        <Themed.h1 sx={{ color: 'primary', mb: 3 }}>Hello Theme UI</Themed.h1>
        <Themed.p>Start editing to see some magic happen!</Themed.p>
      </div>
    </ThemeProvider>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
