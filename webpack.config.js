const { merge } = require('webpack-merge');
const common = require('./webpack/webpack.common');
const dev = require('./webpack/webpack.dev');
const prod = require('./webpack/webpack.prod');

const DEV = 'development';
const PROD = 'production';

module.exports = (env, argv) => {
  let webpackConfig;

  if (argv.mode === DEV) {
    return (webpackConfig = merge(common, dev));
  }

  if (argv.mode === PROD) {
    webpackConfig = merge(common, prod);
  }

  return webpackConfig;
};
