const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {test: /\.tsx?$/, use: 'awesome-typescript-loader'},
      {test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
      {test: /\.(woff|woff2|eot|ttf|otf|png|svg)$/, use: 'file-loader'}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })]
}