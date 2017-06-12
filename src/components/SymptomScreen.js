import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { CancelResetSubmitBar, FormDateTimePicker } from "./FormFields.js";
import './SymptomPicker.js';
import SymptomPicker from './SymptomPicker';

class Symptom extends Component {
  render() {
    const { handleSubmit, reset } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <FormDateTimePicker nameDate="eventDate" nameTime="eventTime" labelDate="Date?" labelTime="Time?"/>
        <SymptomPicker reset={reset}/>
        <CancelResetSubmitBar reset={reset}/>
      </form>
    );
  }
}


// Decorate the form component
const SymptomScreen = reduxForm({
  form: 'SymptomForm' // a unique name for this form
})(Symptom);

export default SymptomScreen;
