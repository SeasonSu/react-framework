import {delay} from 'redux-saga'
import {call, put, takeEvery} from 'redux-saga/effects'
import {LOGIN, LOGIN_SUCCESS, LOGIN_ERROR} from './actions.names'

export default function* login(url) {
  yield delay(1000)
  yield put({type: LOGIN_SUCCESS})
}
