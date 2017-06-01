import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';

class Login extends Component {
  render() {
    const { handleSubmit, reset} = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Benutzername</label>
        <Field name="username" component="input" type="text" placeholder="Benutzername"/>
        <label htmlFor="password">Passwort</label>
        <Field name="password" component="input" type="password" placeholder="Passwort"/>
        <div>
          <RaisedButton label="Zurücksetzen" primary={true} onTouchTap={reset}/>
          <button type="submit">Login</button>
        </div>
      </form>
    )
  }
}


// Decorate the form component
const LoginScreen = reduxForm({
  form: 'loginForm' // a unique name for this form
})(Login);

export default LoginScreen;
