import React from 'react';
import { reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import { FormTextField, SubmitButton, buttonStyle } from '../components/FormFields';

const Register = props => {
  const { handleSubmit, reset } = props;
  return (
    <form onSubmit={handleSubmit}>
      <FormTextField name="username" label="Username"/>
      <br />
      <FormTextField name="password" label="Password" type="password"/>
      <br />
      <FormTextField name="passwordConfirm" label="Password Confirm" type="password"/>
      <br />
      <div>
        <RaisedButton label="Zurücksetzen" onTouchTap={reset} style={buttonStyle}/>
        <SubmitButton label="Register"/>
      </div>
    </form>
  );
};

// Decorate the form component
const RegisterScreen = reduxForm({
  form: 'registerForm' // a unique name for this form
})(Register);

export default RegisterScreen;
