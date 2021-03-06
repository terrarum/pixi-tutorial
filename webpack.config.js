var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var htmlMinifiedOptions = {
  collapseWhitespace: true,
  removeRedundantAttributes: true
};

var htmlWebpackOptions = {
  minify: htmlMinifiedOptions,
  hash: true,
  template: 'src/index.html',
  inject: 'body'
};

var copyWebpackOptions = [ { from: 'src/assets', to: 'assets' } ];

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin(htmlWebpackOptions),
    new CopyWebpackPlugin(copyWebpackOptions)
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          },
          {
            loader: "postcss-loader"
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader'
          }
        ]
      }
    ]
  }
};