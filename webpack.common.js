// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const pkg = require('./package.json');

const libraryName = pkg.name;
const entryPoints = {};
entryPoints[libraryName] = './src/index.js';
// entryPoints[`${libraryName} + .min`] = './src/index.js';

// const webpack = require("webpack");

module.exports = {
  entry: ['./src/index.js'],
  output: {
    filename: `${libraryName}.js`,
    path: path.resolve(__dirname, 'dist'),
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
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
  // plugins: [],
  // optimization: {
  //   include: /\.min\.js$/,
  //   minimize: false,
  // },
  // optimization: {
  //   minimizer: [
  //     new UglifyJsPlugin({
  //       include: /\.min\.js$/,
  //       minimize: true,
  //     }),
  //   ],
  // },
};
