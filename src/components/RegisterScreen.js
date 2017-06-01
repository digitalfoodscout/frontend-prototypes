import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form';

class Register extends Component {
  render() {
    const { handleSubmit, reset} = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Benutzername</label>
        <Field name="username" component="input" type="text" placeholder="Benutzername"/>
        <label htmlFor="password">Passwort</label>
        <Field name="password" component="input" type="password" placeholder="Passwort"/>
        <label htmlFor="password_confirm">Passwort Bestätigung</label>
        <Field name="password_confirm" component="input" type="password" placeholder="Passwort Bestätigung"/>
        <div>
          <button type="reset" onClick={reset}>Zurücksetzen</button>
          <button type="submit">Login</button>
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
