import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Header from '../components/Header'
import FoodDiaryEntryScreen from '../components/FoodDiaryEntryScreen'
import * as actions from '../actions'
import {NAV_ENTRY} from '../constants/NavigationStates';
import ProtectedPage from '../components/ProtectedPage';

const FoodDiaryEntry = ({nav, title, user, loggedIn, actions}) => (
  <div>
    <Header nav={nav} title={title} actions={actions}/>
    <FoodDiaryEntryScreen onSubmit={actions.submitFoodDiaryEntry} user={user}/>
    <ProtectedPage loggedIn={loggedIn} />
  </div>
);

const mapStateToProps = state => ({
  nav: NAV_ENTRY,
  title: 'FoodDiaryEntry',
  user: state.user,
  loggedIn: state.login.authorized
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodDiaryEntry)
