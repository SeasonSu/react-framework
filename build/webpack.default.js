const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                'react', 'env'
              ],
              plugins: ['transform-runtime'], // 避免辅助代码重复引入
              cacheDirectory: true // 编译结果缓存到文件系统，提升编辑效率
            }
          }
        ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({template: 'src/index.html'})]
}
