const paths = require('./paths');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: paths.entryDev,
  devtool: 'inline-source-map',
  output: {
    path: paths.output,
    filename: 'dev.js',
  },
  devServer: {
    contentBase: paths.contentBase,
    index: 'index.html',
    port: 8081,
    writeToDisk: true,
  },
  plugins: [
    // new CleanWebpackPlugin({
    // cleanOnceBeforeBuildPatterns: ['**/*', path.join(process.cwd(), 'extra/**/*')],
    // }),
    new HtmlWebpackPlugin({
      title: 'OC Media Lab Amp',
      template: paths.template,
      filename: 'index.html',
      inject: 'body',
    }),
  ],
};
