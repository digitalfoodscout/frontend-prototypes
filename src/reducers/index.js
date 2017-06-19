import { combineReducers } from 'redux';
import dashboard from './dashboard';
import meals from './meal';
import login from './login';
import register from './register';
import symptoms from './symptom';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  dashboard,
  meals,
  login,
  register,
  symptoms,
  form: formReducer
});

export default rootReducer;
