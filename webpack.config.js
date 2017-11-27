const envs = [
  'local', // 本地
  'dev', // 开发
  'sit', // 联调
  'test', // 测试
  'stg', // 预发布
  'prod' // 生产
]

// 获取当前环境变量
function getEnv() {
  let currentEnv = ''

  envs.map(env => {
    if (process.env.NODE_ENV === env) {
      currentEnv = env
    }
  })
  currentEnv = currentEnv || envs[0]

  console.log('当前环境：' + currentEnv)

  return currentEnv
}

module.exports = require(`./build/webpack.config.${getEnv()}.js`)
