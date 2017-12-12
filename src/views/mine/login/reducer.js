import {combineReducers} from 'redux'
import list, {loadArticles} from './actions'

export default combineReducers({list})

export const actions = {
  loadArticles
}
