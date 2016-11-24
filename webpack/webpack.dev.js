// @flow

const path = require('path');
const pkg = require('../package.json');
const loaders = require('./loaders');

module.exports = {
  entry: path.resolve(__dirname, '../client/src/app'),
  output: {
    path: path.resolve(__dirname, '../client/dist'),
    filename: `${pkg.name}-dev.js`,
    publicPath: `/subapp/${pkg.name}/`,
  },
  devtool: 'source-map',
  module: {
    loaders: [loaders.babel],
  },
};
