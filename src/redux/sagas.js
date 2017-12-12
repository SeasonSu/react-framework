import * as sogas from '../views/**/actions.async.js'
import * as sogas1 from '../reducers/**/actions.watcher.js'

export default function* rootSaga() {
  yield[sogas.mineLogin(), sogas1.login()]
}
