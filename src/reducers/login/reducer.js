import {combineReducers} from 'redux'
import initialState from './state'
import {LOGIN, LOGIN_SUCCESS, LOGIN_ERROR} from './actions.names'

export function login(state = 0, action) {
  switch (action.type) {
    case LOGIN:
      return state

    case LOGIN_SUCCESS:
      return state + 1

    case LOGIN_ERROR:
      return state - 1

    default:
      return state
  }
}

export default combineReducers({login})
