import {combineReducers} from 'redux'
import list, {loadArticles} from '../mine-login/MineLoginActions'

export default combineReducers({list})

export const actions = {
  loadArticles
}
