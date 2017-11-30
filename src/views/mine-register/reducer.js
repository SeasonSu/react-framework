import {combineReducers} from 'redux'
import list, {loadArticles} from '../mine-login/actions'

export default combineReducers({list})

export const actions = {
  loadArticles
}
