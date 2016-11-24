// @flow

const webpack = require('webpack');
const path = require('path');
const pkg = require('../package.json');
const loaders = require('./loaders');

module.exports = {
  entry: path.resolve(__dirname, '../client/src/app'),
  output: {
    path: path.resolve(__dirname, '../client/dist'),
    filename: `${pkg.name}-${pkg.version}.js`,
    publicPath: `/subapp/${pkg.name}/`,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
  module: {
    loaders: [loaders.babel],
  },
};
