/**
 * Created by Max on 12.06.2017.
 */
import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { TextField } from "redux-form-material-ui";
import { blue500, green500 } from "material-ui/styles/colors";
import Avatar from "material-ui/Avatar";
import Chip from "material-ui/Chip";
import SvgIconFace from "material-ui/svg-icons/action/face";
import { FormAutoComplete } from "./FormFields";

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

const pickerStyle = {
  margin: 12,
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

class FoodPicker extends Component {
  render() {
    const { reset } = this.props;
    return (
      <div>
        <FormAutoComplete label="Food?" name="food"
          suggestions={['Huhn', 'Käse', 'Lachs', 'Banane', 'Aal mit Küchenabfall']} reset={reset}/>
        <br/>

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
            floatingLabelFixed={true}
            name="foodEntry1"
          />
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
            floatingLabelFixed={true}
            name="foodEntry2"
          />
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
            floatingLabelFixed={true}
            name="foodEntry3"
          />
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
            floatingLabelFixed={true}
            name="foodEntry4"
          />
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
            floatingLabelFixed={true}
            name="foodEntry5"
          />
        </Chip>
      </div>
    );
  }
}


// Decorate the form component
const FoodPickerScreen = reduxForm({
  form: 'FoodPickerForm' // a unique name for this form
})(FoodPicker);

export default FoodPickerScreen;
