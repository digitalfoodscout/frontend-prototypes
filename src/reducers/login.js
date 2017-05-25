import { LOGIN_RESET, LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR, REGISTER_START } from '../constants/ActionTypes'
import { NAV_DASHBOARD, NAV_REGISTER } from '../constants/NavigationStates'

export default function login(state = {}, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {...state, nav: NAV_DASHBOARD};
        case LOGIN_ERROR:
            //TODO show error message
            return {...state, error: action.error};
        case LOGIN_START:
            //TODO handle async login
            return {...state, nav: NAV_DASHBOARD};
        case LOGIN_RESET:
            //TODO reset form here
            return state;
        case REGISTER_START:
            return {...state, nav: NAV_REGISTER};
        default:
            return state
    }
}