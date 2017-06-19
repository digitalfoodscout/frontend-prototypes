import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Slider } from "redux-form-material-ui";
import { green500 } from "material-ui/styles/colors";
import { FormAutoComplete } from "./FormFields";

const textFieldStyle = {
  margin: 12,
  color: green500,
};

class SymptomPickerScreen extends Component {
  render() {
    const { reset } = this.props;
    return (
      <div>
        <FormAutoComplete label="Symptom?" name="Symptom" suggestions={['Bauchschmerzen', 'Kopfschmerzen', 'Übelkeit']} reset={reset}/>
        <br/>
        <div style={textFieldStyle}>Intensity?</div>
        <Field
          name="intensity"
          component={Slider}
          min={0}
          max={2}
          defaultValue={1}
          format={null}
          step={1}
          style={textFieldStyle}
        />
      </div>
    );
  }
}


// Decorate the form component
const SymptomPicker = reduxForm({
  form: 'SymptomPickerForm' // a unique name for this form
})(SymptomPickerScreen);

export default SymptomPicker;
