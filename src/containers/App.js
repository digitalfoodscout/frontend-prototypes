import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as actions from '../actions'

const App = ({nav, actions}) => (
  <div>
    <Header nav={nav}/>
    <MainSection actions={actions}/>
  </div>
);

const mapStateToProps = state => ({
  nav: state.nav
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
