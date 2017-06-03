import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Header from '../components/Header'
import FoodDiaryEntryScreen from '../components/FoodDiaryEntryScreen'
import * as actions from '../actions'
import {NAV_ENTRY} from '../constants/NavigationStates';

const FoodDiaryEntry = ({nav, title, user, actions}) => (
  <div>
    <Header nav={nav} title={title}/>
    <FoodDiaryEntryScreen onSubmit={actions.submitFoodDiaryEntry} user={user}/>
  </div>
);

const mapStateToProps = state => ({
  nav: NAV_ENTRY,
  title: 'FoodDiaryEntry',
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodDiaryEntry)
