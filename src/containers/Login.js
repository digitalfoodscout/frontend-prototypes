import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as actions from '../actions'
import { NAV_LOGIN } from '../constants/NavigationStates';

const Login = ({nav, title, actions}) => (
  <div>
    <Header nav={nav} title={title} />
    <MainSection actions={actions} />
  </div>
)

const mapStateToProps = state => ({
  nav: NAV_LOGIN,
  title: 'Login'
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
