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
                // 避免辅助代码重复引入
                'transform-runtime',
                // 支持es7的装饰者模式
                'transform-decorators-legacy',
                [
                  // 自动匹配样式，并模块化
                  'react-css-modules', {
                    // 匹配文件类型
                    'filetypes': {
                      '.scss': {
                        // 解析语法
                        'syntax': 'postcss-scss'
                      }
                    }
                  }
                ]
              ],
              // 编译结果缓存到文件系统，提升编辑效率
              cacheDirectory: true
            }
          }
        ]
      }, {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
          }, {
            loader: 'sass-loader'
          }, {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: (loader) => [
                // 解决样式文件import路径问题
                require('postcss-import')(),
                // 添加-webkit等前缀
                require('autoprefixer')(),
                // 可以保证生产环境的代码尽量小
                require('cssnano')(),
                // px转为rem
                require('postcss-px2rem')({remUnit: 20})
              ]
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
