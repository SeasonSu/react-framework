import {combineReducers} from 'redux'
import list, {loadArticles} from './MineLoginActions'

export default combineReducers({list})

export const actions = {
  loadArticles
}
