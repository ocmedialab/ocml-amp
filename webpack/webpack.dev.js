const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    ocml: paths.entryDev,
  },
  devtool: 'inline-source-map',
  output: {
    path: paths.output,
    filename: '[name].[hash:8].js',
    sourceMapFilename: '[name].[hash:8].map',
    chunkFilename: '[id].[hash:8].js',
  },
  devServer: {
    contentBase: paths.contentBase,
    index: 'index.html',
    port: 8082,
    writeToDisk: true,
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
