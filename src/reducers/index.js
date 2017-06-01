import { combineReducers } from 'redux'
import dashboard from './dashboard'
import entry from './entry'
import login from './login'
import register from './register'
import symptom from './symptom'
import { reducer as formReducer } from 'redux-form'


const rootReducer = combineReducers({
    dashboard,
    entry,
    login,
    register,
    symptom,
    form: formReducer
});

export default rootReducer
