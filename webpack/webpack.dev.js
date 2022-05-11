/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

module.exports = {
  entry: paths.entryDev,
  devtool: 'inline-source-map',
  output: {
    path: paths.output,
    filename: '[name].[hash:8].js',
    sourceMapFilename: '[name].[hash:8].map',
    chunkFilename: '[id].[hash:8].js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    // contentBase: paths.contentBase,
    port: 8082,
    devMiddleware: {
      // index: true,
      // mimeTypes: { phtml: 'text/html' },
      // publicPath: '/publicPathForDevServe',
      // serverSideRender: true,
      writeToDisk: true,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'OC Media Lab Amp',
      template: paths.template,
      filename: 'index.html',
      inject: 'body',
    }),
  ],
};
