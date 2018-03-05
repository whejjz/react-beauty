import React, { PropTypes, PureComponent } from 'react'
import connent from '../../connect/index'
import * as actions from '../actions'

class Login extends PureComponent {
  constructor (props) {
    super(props)
  }
  componentDidMount () {
    const { actions } = this.props
    console.log(actions, 1)
    actions.startLogin('http://apieduexpe.17win.com/api/classroom/list?areacode=650000&')
  }
  render () {
    const { login, resolveADData } = this.props
    console.log(login, 222)
    return (
      <div>welcome home !!!</div>
    )
  }
}

export default connent(actions, Login)

