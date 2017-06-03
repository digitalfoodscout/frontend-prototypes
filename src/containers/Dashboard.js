import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../components/Header';
import * as actions from '../actions';
import {NAV_DASHBOARD} from '../constants/NavigationStates';
import MainSection from '../components/MainSection';

const Dashboard = ({nav, title, user, actions}) => (
  <div>
    <Header nav={nav} title={title}/>
    <MainSection actions={actions}>
    </MainSection>
  </div>
);

const mapStateToProps = state => ({
  nav: NAV_DASHBOARD,
  title: 'Dashboard',
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
