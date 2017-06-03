import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Header from '../components/Header'
import SymptomScreen from '../components/SymptomScreen'
import * as actions from '../actions'
import {NAV_SYMPTOM} from '../constants/NavigationStates';
import ProtectedPage from '../components/ProtectedPage';

const Symptom = ({nav, title, user, loggedIn, actions}) => (
  <div>
    <Header nav={nav} title={title}/>
    <SymptomScreen onSubmit={actions.submitSymptom} user={user}/>
    <ProtectedPage loggedIn={loggedIn} />
  </div>
);

const mapStateToProps = state => ({
  nav: NAV_SYMPTOM,
  title: 'Symptom',
  user: state.user,
  loggedIn: state.login.authorized
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Symptom)
