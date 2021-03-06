const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const theme = require('../src/styles/theme')

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
                ],
                'import-glob',
                // 确保加载antd-mobile less 文件
                [
                  'import', {
                    'libraryName': 'antd-mobile',
                    'style': true
                  }
                ]
              ],
              // 编译结果缓存到文件系统，提升编辑效率
              // TODO：设置为true时，import-glob的文件无法更新
              cacheDirectory: false
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
                // scss中操作资源
                // requrie('postcss-assets')(),
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
      }, {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: 'less-loader',
            options: {
              modifyVars: theme
            }
          }
        ]
      }, {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }
        ]
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }, {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  plugins: [new HtmlWebpackPlugin({template: 'src/index.html'})]
}
