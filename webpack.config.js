/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge');
const common = require('./webpack/webpack.common');
const dev = require('./webpack/webpack.dev');
const prod = require('./webpack/webpack.prod');

const DEV = 'development';

module.exports = (env, argv) => {
  let webpackConfig;
  if (argv.mode !== DEV) {
    webpackConfig = merge(common, prod);
    return webpackConfig;
  }

  webpackConfig = merge(common, dev);
  return webpackConfig;
};
