import React, { Component } from "react";
import { reduxForm } from "redux-form";
import FoodPicker from "./FoodPicker";
import { CancelResetSubmitBar, FormDateTimePicker } from "./FormFields";

class FoodDiaryEntry extends Component {
  render() {
    const { handleSubmit, reset } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <FormDateTimePicker nameDate="eventDate" nameTime="eventTime" labelDate="Date?" labelTime="Time?"/>
        <FoodPicker/>
        <CancelResetSubmitBar reset={reset}/>
      </form>
    );
  }
}


// Decorate the form component
const FoodDiaryEntryScreen = reduxForm({
  form: 'FoodDiaryEntryForm' // a unique name for this form
})(FoodDiaryEntry);

export default FoodDiaryEntryScreen;
