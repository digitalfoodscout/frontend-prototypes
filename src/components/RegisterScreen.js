import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import {green500, blue500} from 'material-ui/styles/colors';
import {TextField} from 'redux-form-material-ui'

const buttonStyle = {
  margin: 12,
};

const textFieldStyle = {
  margin: 12,
  color: green500,
};

const underlineStyle = {
  borderColor: green500,
};
const floatingLabelStyle = {
  color: green500,
};

const floatingLabelFocusStyle = {
  color: blue500,
};

class Register extends Component {
  render() {
    const { handleSubmit, reset} = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="username" component={TextField}
               floatingLabelText="Username"
               style={textFieldStyle}
               underlineStyle={underlineStyle}
               floatingLabelStyle={floatingLabelStyle}
               floatingLabelFocusStyle={floatingLabelFocusStyle}
               floatingLabelFixed={true}
        /><br />
        <Field name="password" component={TextField}
               floatingLabelText="Password"
               style={textFieldStyle}
               underlineStyle={underlineStyle}
               floatingLabelStyle={floatingLabelStyle}
               floatingLabelFocusStyle={floatingLabelFocusStyle}
               floatingLabelFixed={true}
               type="password"
        /><br />
        <Field name="passwordConfirm" component={TextField}
               floatingLabelText="Password Confirm"
               style={textFieldStyle}
               underlineStyle={underlineStyle}
               floatingLabelStyle={floatingLabelStyle}
               floatingLabelFocusStyle={floatingLabelFocusStyle}
               floatingLabelFixed={true}
               type="password"
        /><br />

        <div>
          <RaisedButton label="Zurücksetzen" onTouchTap={reset} style={buttonStyle}/>
          <RaisedButton label="Register" primary={true} style={buttonStyle}/>
        </div>
      </form>
    )
  }
}


// Decorate the form component
const RegisterScreen = reduxForm({
  form: 'registerForm' // a unique name for this form
})(Register);

export default RegisterScreen;
