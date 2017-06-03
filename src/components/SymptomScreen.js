import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import {DatePicker, TimePicker, AutoComplete, Slider} from 'redux-form-material-ui';
import {green500, blue500} from 'material-ui/styles/colors';
import {AutoComplete as MUIAutoComplete} from 'material-ui';


const buttonStyle = {
  margin: 12,
};

const pickerStyle = {
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

class Symptom extends Component {
  render() {
    const {handleSubmit, reset} = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="eventDate" component={DatePicker} format={null} style={pickerStyle}
               floatingLabelText="What day was the event?"
               underlineStyle={underlineStyle}
               floatingLabelStyle={floatingLabelStyle}
               floatingLabelFocusStyle={floatingLabelFocusStyle}
               floatingLabelFixed={true}/>
        <Field name="eventTime" component={TimePicker} format={null} style={pickerStyle}
               floatingLabelText="Which time was the event?"
               underlineStyle={underlineStyle}
               floatingLabelStyle={floatingLabelStyle}
               floatingLabelFocusStyle={floatingLabelFocusStyle}
               floatingLabelFixed={true}/>
        <div style={textFieldStyle}>Intensity?</div>
        <Field
          name="symptom"
          component={AutoComplete}
          floatingLabelText="Symptom?"
          style={textFieldStyle}
          underlineStyle={underlineStyle}
          floatingLabelStyle={floatingLabelStyle}
          floatingLabelFocusStyle={floatingLabelFocusStyle}
          floatingLabelFixed={true}
          openOnFocus
          filter={MUIAutoComplete.fuzzyFilter}
          dataSource={['Bauchschmerzen', 'Kopfschmerzen', 'Übelkeit']}
        /><br />
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
        <div>
          <RaisedButton label="Cancel" style={buttonStyle}/>
          <RaisedButton label="Reset" onTouchTap={reset} style={buttonStyle}/>
          <RaisedButton label="Save" type="submit" primary={true} style={buttonStyle}/>
        </div>
      </form>
    )
  }
}


// Decorate the form component
const SymptomScreen = reduxForm({
  form: 'SymptomForm' // a unique name for this form
})(Symptom);

export default SymptomScreen;
