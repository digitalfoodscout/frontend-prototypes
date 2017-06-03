import {SYMPTOM_SAVE, SYMPTOM_CANCEL} from '../constants/ActionTypes'
import {NAV_DASHBOARD} from '../constants/NavigationStates'

export default function entry(state = {}, action) {
  switch (action.type) {
    case SYMPTOM_SAVE:
      //TODO pass parameters to dashboard page
      return {...state, nav: NAV_DASHBOARD};
    case SYMPTOM_CANCEL:
      return state;
    default:
      return state
  }
}
