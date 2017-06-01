import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import RegisterScreen from '../components/RegisterScreen'
import * as actions from '../actions'
import { NAV_REGISTER } from '../constants/NavigationStates';

const Register = ({nav, title, user, actions}) => (
  <div>
    <Header nav={nav} title={title} />
    <RegisterScreen onSubmit={actions.submitRegister} user={user}/>
  </div>
);

const mapStateToProps = state => ({
  nav: NAV_REGISTER,
  title: 'Register',
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)
