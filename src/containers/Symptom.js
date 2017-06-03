import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Header from '../components/Header'
import SymptomScreen from '../components/SymptomScreen'
import * as actions from '../actions'
import {NAV_SYMPTOM} from '../constants/NavigationStates';

const Symptom = ({nav, title, user, actions}) => (
  <div>
    <Header nav={nav} title={title}/>
    <SymptomScreen onSubmit={actions.submitSymptom} user={user}/>
  </div>
);

const mapStateToProps = state => ({
  nav: NAV_SYMPTOM,
  title: 'Symptom',
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Symptom)
