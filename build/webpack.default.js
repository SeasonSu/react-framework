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
                'transform-decorators-legacy', // 支持es7的装饰者模式
                // 'react-css-modules'  css样式模块化
              ],
              cacheDirectory: true // 编译结果缓存到文件系统，提升编辑效率
            }
          }
        ]
      }, {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader?modules'
          }, {
            loader: 'sass-loader'
          },
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     ident: 'postcss',
          //     plugins: (loader) => [
          //       require('postcss-import')(),
          //       require('postcss-nested')(),
          //       require('postcss-cssnext')(),
          //       require('autoprefixer')([
          //         'Android 2.3',
          //         'Android >= 4',
          //         'Chrome >= 35',
          //         'Firefox >= 31',
          //         'Explorer >= 8',
          //         'iOS >= 7',
          //         'Opera >= 12',
          //         'Safari >= 7.1'
          //       ]),
          //       require('cssnano')(),
          //       require('postcss-px2rem')({remUnit: 20})
          //     ]
          //   }
          // }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  plugins: [new HtmlWebpackPlugin({template: 'src/index.html'})]
}
