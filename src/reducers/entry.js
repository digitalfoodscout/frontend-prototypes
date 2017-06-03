import {ENTRY_SAVE, ENTRY_CANCEL} from '../constants/ActionTypes'
import {NAV_DASHBOARD} from '../constants/NavigationStates'


export default function entry(state = {}, action) {
  switch (action.type) {
    case ENTRY_SAVE:
      //TODO pass parameters to dashboard page
      return {...state, nav: NAV_DASHBOARD};
    case ENTRY_CANCEL:
      return state;
    default:
      return state
  }
}
