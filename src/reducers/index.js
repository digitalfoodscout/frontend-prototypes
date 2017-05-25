import { combineReducers } from 'redux'
import dashboard from './dashboard'
import entry from './entry'
import login from './login'
import register from './register'
import symptom from './symptom'


const rootReducer = combineReducers({
    dashboard,
    entry,
    login,
    register,
    symptom
});

export default rootReducer
