import React from "react";
import { Field } from "redux-form";
import { blue500, green500 } from "material-ui/styles/colors";
import { TextField, DatePicker, TimePicker, AutoComplete } from "redux-form-material-ui";
import { withRouter } from 'react-router-dom';
import RaisedButton from "material-ui/RaisedButton";
import PropTypes from "prop-types";
import { AutoComplete as MUIAutoComplete } from 'material-ui';

const pickerStyle = {
  margin: 12,
};

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

const FormDatePicker = props => {
  const { name, label } = props;
  return (
    <Field name={name} component={DatePicker} format={null} style={pickerStyle}
      floatingLabelText={label}
      underlineStyle={underlineStyle}
      floatingLabelStyle={floatingLabelStyle}
      floatingLabelFocusStyle={floatingLabelFocusStyle}
      floatingLabelFixed={true}/>
  );
};

const FormTimePicker = props => {
  const { name, label } = props;
  return (
    <Field name={name} component={TimePicker} format={null} style={pickerStyle}
      floatingLabelText={label}
      underlineStyle={underlineStyle}
      floatingLabelStyle={floatingLabelStyle}
      floatingLabelFocusStyle={floatingLabelFocusStyle}
      floatingLabelFixed={true}/>
  );
};

const FormDateTimePicker = props => {
  const { nameDate, labelDate, nameTime, labelTime } = props;
  return (
    <div>
      <FormDatePicker name={nameDate} label={labelDate}/>
      <FormTimePicker name={nameTime} label={labelTime}/>
    </div>
  );
};

FormTextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

const SubmitButton = props => {
  const { label } = props;
  return (
    <RaisedButton type="submit" label={label || "Submit"} primary={true} style={buttonStyle}/>
  );
};

const ResetButton = props => {
  const { label, reset } = props;
  return (
    <RaisedButton type="reset" label={label || "Reset"} onTouchTap={reset} style={buttonStyle}/>
  );
};

const CancelResetSubmitBar = props => {
  const { cancelLabel, resetLabel, submitLabel, reset } = props;
  const BackButton = withRouter(({ history, label, }) => (
    <RaisedButton label={label} onTouchTap={() => history.goBack()} style={buttonStyle}/>
  ));
  return (
    <div>
      <BackButton label={cancelLabel || "Cancel"}/>
      <ResetButton label={resetLabel} reset={reset}/>
      <SubmitButton label={submitLabel}/>
    </div>
  );
};

const FormAutoComplete = props => {
  const { name, label, suggestions } = props;
  return (
    <Field
      name={name}
      component={AutoComplete}
      floatingLabelText={label}
      style={textFieldStyle}
      underlineStyle={underlineStyle}
      floatingLabelStyle={floatingLabelStyle}
      floatingLabelFocusStyle={floatingLabelFocusStyle}
      floatingLabelFixed={true}
      openOnFocus
      filter={MUIAutoComplete.fuzzyFilter}
      dataSource={suggestions}
    />
  );
};

export {
  FormTextField,
  SubmitButton,
  ResetButton,
  FormDatePicker,
  FormTimePicker,
  FormDateTimePicker,
  CancelResetSubmitBar,
  FormAutoComplete,
  buttonStyle
};

export default {
  FormTextField,
  SubmitButton,
  ResetButton,
  FormDatePicker,
  FormTimePicker,
  FormDateTimePicker,
  CancelResetSubmitBar,
  FormAutoComplete
};
