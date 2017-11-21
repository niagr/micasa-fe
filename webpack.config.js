const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

// All content must go here. All other URL's except './static' will be served index.html
// react-router takes care of routing to other app URL's
const STATIC_DIR = './static'

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: STATIC_DIR + '/bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {test: /\.tsx?$/, use: 'awesome-typescript-loader'},
      // For integrating TypeScript source maps with Webpack output
      // Doc: https://www.typescriptlang.org/docs/handbook/react-&-webpack.html
      {enforce: "pre", test: /\.js$/, loader: "source-map-loader"},
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|png|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: STATIC_DIR + '/[hash].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })]
}