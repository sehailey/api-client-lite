const path = require('path')

const MODE = process.env.NODE_ENV

module.exports = {
  mode: MODE,
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3001,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:1337',
    },
  },
}
