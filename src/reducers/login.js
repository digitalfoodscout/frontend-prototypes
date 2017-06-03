import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTER_START,
  LOGOUT_ERROR,
  LOGOUT_SUCCESS
} from '../constants/ActionTypes'
import {NAV_DASHBOARD, NAV_REGISTER} from '../constants/NavigationStates'

export default function login(state = {authorized: false}, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {...state, authorized: true};
    case LOGIN_ERROR:
      //TODO show error message
      return {...state, error: action.error};
    case LOGIN_START:
      //TODO handle async login
      return {...state, nav: NAV_DASHBOARD};
    case LOGOUT_SUCCESS:
      return {...state, authorized: false};
    case LOGOUT_ERROR:
      return {...state, error: action.error};
    case REGISTER_START:
      return {...state, nav: NAV_REGISTER};
    default:
      return state
  }
}
