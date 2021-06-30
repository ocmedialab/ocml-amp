const paths = require('./paths');
// const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: paths.entryProd,
  devtool: 'source-map',
  output: {
    path: paths.output,
    libraryTarget: 'module',
  },
  plugins: [
    // https://developers.google.com/web/tools/workbox/guides/get-started
    // new WorkboxWebpackPlugin.GenerateSW(),
  ],
  experiments: {
    outputModule: true,
  },
};
