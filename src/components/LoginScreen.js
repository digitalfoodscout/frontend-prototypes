import React from 'react';
import { reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import { FormTextField, SubmitButton, buttonStyle } from '../components/FormFields';

const Login = props => {
  const { handleSubmit, reset } = props;
  return (
    <form onSubmit={handleSubmit}>
      <FormTextField name="username" label="Username"/>
      <br />
      <FormTextField name="password" label="Password" type="password"/>
      <br />
      <div>
        <RaisedButton type="reset" label="Zurücksetzen" primary={true} onTouchTap={reset} style={buttonStyle}/>
        <SubmitButton label="Login"/>
      </div>
    </form>
  );
};

// Decorate the form component
const LoginScreen = reduxForm({
  form: 'loginForm' // a unique name for this form
})(Login);

export default LoginScreen;
