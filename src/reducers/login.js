import {LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR, REGISTER_START} from '../constants/ActionTypes'
import {NAV_DASHBOARD, NAV_REGISTER} from '../constants/NavigationStates'

export default function login(state = {authorized: false}, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log({...state, authorized: true});
      return {...state, authorized: true};
    case LOGIN_ERROR:
      //TODO show error message
      return {...state, error: action.error, authorized: false};
    case LOGIN_START:
      //TODO handle async login
      return {...state, nav: NAV_DASHBOARD};
    case REGISTER_START:
      return {...state, nav: NAV_REGISTER};
    default:
      return state
  }
}
