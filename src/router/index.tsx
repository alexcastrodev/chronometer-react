import { FunctionComponent } from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'

import { Home } from '@/pages'

const Router: FunctionComponent = props => {
  return (
    <Switch {...props}>
      <Route exact path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
  )
}

export default Router
