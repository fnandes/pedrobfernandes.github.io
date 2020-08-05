const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: path.resolve('src/index.js'),
  devtool: 'inline',
  module: {
    rules: [
      {
        test: /.jsx?/i,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.pug$/i,
        use: ['pug-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    publicPath: '',
    filename: 'index.bundle.js'
  },
  devServer: {
    contentBase: path.resolve('docs'),
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('src/index.pug')
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    })
  ]
}
