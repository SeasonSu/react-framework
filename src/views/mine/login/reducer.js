import {combineReducers} from 'redux'
import list, {counter, loadArticles} from './actions'

export default combineReducers({list, counter})

export const actions = {
  loadArticles
}
