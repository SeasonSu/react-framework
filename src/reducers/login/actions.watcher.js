import {takeEvery} from 'redux-saga/effects'
import login from './actions.js'
import {LOGIN, LOGIN_SUCCESS, LOGIN_ERROR} from './actions.names'

export default function* watchLogin() {
  yield takeEvery(LOGIN, login)
}
