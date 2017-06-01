import React, {Component} from "react";
//import PropTypes from 'prop-types'
import {Field, reduxForm} from "redux-form";
import RaisedButton from "material-ui/RaisedButton";
import {AutoComplete, DatePicker, TextField, TimePicker} from "redux-form-material-ui";
import {blue500, green500} from "material-ui/styles/colors";
import {AutoComplete as MUIAutoComplete} from "material-ui";

import Avatar from "material-ui/Avatar";
import Chip from "material-ui/Chip";
import SvgIconFace from "material-ui/svg-icons/action/face";

const styles = {
  chip: {
    margin: 12,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

function handleRequestDelete() {
  alert('You clicked the delete button.');
}

function handleTouchTap() {
  alert('You clicked the Chip.');
}

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

class FoodDiaryEntry extends Component {
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
        <Field
          name="food"
          component={AutoComplete}
          floatingLabelText="Food?"
          style={textFieldStyle}
          underlineStyle={underlineStyle}
          floatingLabelStyle={floatingLabelStyle}
          floatingLabelFocusStyle={floatingLabelFocusStyle}
          floatingLabelFixed={true}
          openOnFocus
          filter={MUIAutoComplete.fuzzyFilter}
          dataSource={['Huhn', 'Käse', 'Lachs', 'Banane', 'Aal mit Küchenabfall']}
        /><br />

        <Chip
          onRequestDelete={handleRequestDelete}
          onTouchTap={handleTouchTap}
          style={styles.chip}
        >
          <Avatar color="#444" icon={<SvgIconFace />}/>
          Huhn
          <Field component={TextField}
                 style={pickerStyle}
                 floatingLabelText="Amount in g"
                 underlineStyle={underlineStyle}
                 floatingLabelStyle={floatingLabelStyle}
                 floatingLabelFocusStyle={floatingLabelFocusStyle}
                 floatingLabelFixed={true}/>
        </Chip>
        <Chip
          onRequestDelete={handleRequestDelete}
          onTouchTap={handleTouchTap}
          style={styles.chip}
        >
          <Avatar color="#444" icon={<SvgIconFace />}/>
          Käse
          <Field component={TextField}
                 style={pickerStyle}
                 floatingLabelText="Amount in g"
                 underlineStyle={underlineStyle}
                 floatingLabelStyle={floatingLabelStyle}
                 floatingLabelFocusStyle={floatingLabelFocusStyle}
                 floatingLabelFixed={true}/>
        </Chip>
        <Chip
          onRequestDelete={handleRequestDelete}
          onTouchTap={handleTouchTap}
          style={styles.chip}
        >
          <Avatar color="#444" icon={<SvgIconFace />}/>
          Lachs
          <Field component={TextField}
                 style={pickerStyle}
                 floatingLabelText="Amount in g"
                 underlineStyle={underlineStyle}
                 floatingLabelStyle={floatingLabelStyle}
                 floatingLabelFocusStyle={floatingLabelFocusStyle}
                 floatingLabelFixed={true}/>
        </Chip>
        <Chip
          onRequestDelete={handleRequestDelete}
          onTouchTap={handleTouchTap}
          style={styles.chip}
        >
          <Avatar color="#444" icon={<SvgIconFace />}/>
          Banane
          <Field component={TextField}
                 style={pickerStyle}
                 floatingLabelText="Amount in g"
                 underlineStyle={underlineStyle}
                 floatingLabelStyle={floatingLabelStyle}
                 floatingLabelFocusStyle={floatingLabelFocusStyle}
                 floatingLabelFixed={true}/>
        </Chip>
        <Chip
          onRequestDelete={handleRequestDelete}
          onTouchTap={handleTouchTap}
          style={styles.chip}
        >
          <Avatar color="#444" icon={<SvgIconFace />}/>
          Aal mit Küchenabfall
          <Field component={TextField}
                 style={pickerStyle}
                 floatingLabelText="Amount in g"
                 underlineStyle={underlineStyle}
                 floatingLabelStyle={floatingLabelStyle}
                 floatingLabelFocusStyle={floatingLabelFocusStyle}
                 floatingLabelFixed={true}/>
        </Chip>

        <div>
          <RaisedButton label="Cancel" style={buttonStyle}/>
          <RaisedButton label="Reset" onTouchTap={reset} style={buttonStyle}/>
          <RaisedButton label="Save" primary={true} style={buttonStyle}/>
        </div>
      </form>
    )
  }
}


// Decorate the form component
const FoodDiaryEntryScreen = reduxForm({
  form: 'FoodDiaryEntryForm' // a unique name for this form
})(FoodDiaryEntry);

export default FoodDiaryEntryScreen;
