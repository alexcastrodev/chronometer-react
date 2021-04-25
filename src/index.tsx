import { FunctionComponent } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './utils'
import { ChronometerProvider } from './contexts/chronometer'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

const Index: FunctionComponent = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <ChronometerProvider>
        <App />
      </ChronometerProvider>
    </ThemeProvider>
  </BrowserRouter>
)

ReactDOM.render(<Index />, document.getElementById('root'))

serviceWorkerRegistration.register()

// reportWebVitals()
