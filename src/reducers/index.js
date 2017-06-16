import { combineReducers } from 'redux';
import dashboard from './dashboard';
import meals from './meal';
import login from './login';
import register from './register';
import symptom from './symptom';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  dashboard,
  meals,
  login,
  register,
  symptom,
  form: formReducer
});

export default rootReducer;
