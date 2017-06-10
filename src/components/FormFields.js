import React from 'react';
import { Field } from 'redux-form';
import { green500, blue500 } from 'material-ui/styles/colors';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

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

const FormTextField = props => {
  const { name, label, type = 'text' } = props;
  return (
    <Field name={name} component={TextField}
           floatingLabelText={label}
           style={textFieldStyle}
           underlineStyle={underlineStyle}
           floatingLabelStyle={floatingLabelStyle}
           floatingLabelFocusStyle={floatingLabelFocusStyle}
           floatingLabelFixed={true}
           type={type}
    />
  );
};
FormTextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

const SubmitButton = props => {
  const { label } = props;
  return (
    <RaisedButton type="submit" label={label} primary={true} style={buttonStyle}/>
  );
};
SubmitButton.propTypes = {
  label: PropTypes.string.isRequired
};

export {
  FormTextField,
  SubmitButton,
  buttonStyle
};

export default {
  FormTextField,
  SubmitButton
};
