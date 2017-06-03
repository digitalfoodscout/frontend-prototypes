import {LOGOUT, SYMPTOM_CREATE, ENTRY_CREATE, SYMPTOM_EDIT, ENTRY_EDIT} from '../constants/ActionTypes'
import {NAV_LOGIN, NAV_ENTRY, NAV_SYMPTOM} from '../constants/NavigationStates'

export default function dashboard(state = {}, action) {
  switch (action.type) {
    case LOGOUT:
      return {...state, nav: NAV_LOGIN};
    case SYMPTOM_CREATE:
      return {...state, nav: NAV_SYMPTOM};
    case SYMPTOM_EDIT:
      //TODO pass symptom here from action
      return {...state, nav: NAV_SYMPTOM};
    case ENTRY_CREATE:
      return {...state, nav: NAV_ENTRY};
    case ENTRY_EDIT:
      //TODO pass entry here from action
      return {...state, nav: NAV_ENTRY};
    default:
      return state
  }
}
