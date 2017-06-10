import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import * as actions from '../actions';
import { NAV_DASHBOARD } from '../constants/NavigationStates';
import MainSection from '../components/MainSection';
import ProtectedPage from '../components/ProtectedPage';

const Dashboard = ({ nav, title, loggedIn, actions }) => (
  <div>
    <Header nav={nav} title={title} actions={actions}/>
    <MainSection actions={actions}>
    </MainSection>
    <ProtectedPage loggedIn={loggedIn}/>
  </div>
);

const mapStateToProps = state => ({
  nav: NAV_DASHBOARD,
  title: 'Dashboard',
  loggedIn: state.login.authorized
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
