import {call, put, takeEvery, takeLatest, delay} from 'redux-saga/effects'

export default function* incrementAsync() {
  yield delay(1000)
  yield put({type: 'INCREMENT'})
}
