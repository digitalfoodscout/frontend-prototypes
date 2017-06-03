import {REGISTER_SUCCESS, REGISTER_CANCEL, REGISTER_ERROR} from '../constants/ActionTypes'
import {NAV_LOGIN} from '../constants/NavigationStates'

export default function register(state = {}, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      //TODO pass parameters to login page
      return {...state, nav: NAV_LOGIN};
    case REGISTER_ERROR:
      //TODO show error message
      return {...state, error: action.error};
    case REGISTER_CANCEL:
      return {...state, nav: NAV_LOGIN};
    default:
      return state
  }
}
