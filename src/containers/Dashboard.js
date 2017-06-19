import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import * as actions from '../actions';
import { NAV_DASHBOARD } from '../constants/NavigationStates';
import DashboardScreen from '../components/DashboardScreen';
import ProtectedPage from '../components/ProtectedPage';

const Dashboard = ({ nav, title, loggedIn, meals, symptoms, actions }) => (
  <div>
    <Header nav={nav} title={title} actions={actions}/>
    <DashboardScreen actions={actions} meals={meals} symptoms={symptoms}>
    </DashboardScreen>
    <ProtectedPage loggedIn={loggedIn}/>
  </div>
);

const mapStateToProps = state => ({
  nav: NAV_DASHBOARD,
  title: 'Dashboard',
  loggedIn: state.login.authorized,
  meals: state.meals,
  symptoms: state.symptoms
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
