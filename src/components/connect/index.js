import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export default (action, _class) => {

  const mapStateToProps = (state, ownProps) => {
    return state
  }

  const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: bindActionCreators(action, dispatch),
    dispatch: dispatch
  })

  return connect(mapStateToProps, mapDispatchToProps)(_class)
}