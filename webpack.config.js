const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: './static/bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {test: /\.tsx?$/, use: 'awesome-typescript-loader'},
      {
        test: /\.css$/, 
        use: [ 
          'style-loader', 
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          } 
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|png|svg)$/, 
        use: {
          loader: 'file-loader',
          options: {
            name: './static/[hash].[ext]'
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