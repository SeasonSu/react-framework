import {combineReducers} from 'redux'
import PreviewList, {loadArticles} from './MineLoginActions'

export default combineReducers({PreviewList})

export const actions = {
  loadArticles
}
