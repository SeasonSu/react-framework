// 引入所有的reducer
import * as modules from '../views/**/*Reducer.js'

console.log('modules', modules);

export default {
  ...modules
}
