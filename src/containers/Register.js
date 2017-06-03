import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import * as actions from '../actions';
import {NAV_REGISTER} from '../constants/NavigationStates';
import Header from '../components/Header';
import RegisterScreen from '../components/RegisterScreen';
import {buttonStyle}  from '../components/FormFields';


const Register = ({nav, title, user, actions}) => (
  <div>
    <Header nav={nav} title={title}/>
    <RegisterScreen onSubmit={actions.submitRegister} user={user}/>
    <Divider/>
    <Link to="/login">
      <RaisedButton label="Zurück zum Login" style={buttonStyle}/>
    </Link>
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
