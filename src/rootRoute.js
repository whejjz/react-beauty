import React, { PureComponent } from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import {view as Login} from './components/login/index'
import connent from './components/connect/index'

class rootApp extends PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props)
  }
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route exact path='/login' component={Login}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default connent({}, rootApp)