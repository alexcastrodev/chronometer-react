import { FunctionComponent } from 'react'
import useHeight from '@/utils/useHeight'
import Router from '@/router'
import '@/styles/global.css'

const App: FunctionComponent = () => {
  // used to work around 100vh problems
  const height = useHeight()

  return (
    <div className="mainContainer" style={{ minHeight: height }}>
      <Router />
    </div>
  )
}

export default App
