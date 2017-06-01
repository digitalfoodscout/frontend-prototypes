import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import LoginScreen from '../components/LoginScreen'
import * as actions from '../actions'
import { NAV_LOGIN } from '../constants/NavigationStates';

const Login = ({nav, title, user, actions}) => (
  <div>
    <Header nav={nav} title={title} />
    <LoginScreen onSubmit={actions.submitLogin} user={user}/>
  </div>
)

const mapStateToProps = state => ({
  nav: NAV_LOGIN,
  title: 'Login',
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
