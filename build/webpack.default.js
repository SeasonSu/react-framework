const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                'react', 'env', 'stage-0'
              ],
              plugins: [
                'transform-runtime', // 避免辅助代码重复引入
                'transform-decorators-legacy'
              ],
              cacheDirectory: true // 编译结果缓存到文件系统，提升编辑效率
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  plugins: [new HtmlWebpackPlugin({template: 'src/index.html'})]
}
