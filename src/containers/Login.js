import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom';
import Header from '../components/Header'
import LoginScreen from '../components/LoginScreen'
import * as actions from '../actions'
import {NAV_LOGIN} from '../constants/NavigationStates';
import {RegisterNote} from '../components/RegisterNote';

const Login = ({nav, title, user, loggedIn, actions}) => {
  console.log(loggedIn);
  return (
    <div>
      <Header nav={nav} title={title}/>
      <LoginScreen onSubmit={actions.submitLogin} user={user}/>
      <RegisterNote />
      {loggedIn === true ? <Redirect to='dashboard'/> : ''}
    </div>
  );
};

const mapStateToProps = state => ({
  nav: NAV_LOGIN,
  title: 'Login',
  user: state.user,
  loggedIn: state.login.authorized
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
