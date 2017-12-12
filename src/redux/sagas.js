import {call, put, takeEvery, takeLatest, delay} from 'redux-saga/effects'
import * as sogas from '../views/**/actions.async.js'

export default function* rootSaga() {
  yield[sogas.mineLogin()]
}
