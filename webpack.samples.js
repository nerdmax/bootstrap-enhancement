const path = require('path');
// const webpack = require("webpack");

module.exports = {
  mode: 'development',
  entry: ['./samples/index.js'],
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'samples'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'samples'),
    watchContentBase: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env'],
          },
        },
      },
    ],
  },
  plugins: [],
};
