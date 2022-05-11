// eslint-disable-next-line @typescript-eslint/no-var-requires
const paths = require('./paths');
// const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: paths.entryProd,
  bail: true,
  devtool: false,
  output: {
    clean: true,
    path: paths.output,
    filename: 'index.js',
    library: {
      name: 'OcmlAmp',
      type: 'commonjs',
    },
    // module: true,
    // libraryTarget: 'commonjs',
    // globalObject: 'this',
    // umdNamedDefine: true,
  },
  optimization: {
    minimize: false,
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
    'styled-components': {
      root: 'styled-components',
      commonjs2: 'styled-components',
      commonjs: 'styled-components',
      amd: 'styled-components',
    },
  },
  plugins: [
    // https://developers.google.com/web/tools/workbox/guides/get-started
    // new WorkboxWebpackPlugin.GenerateSW(),
  ],
  // experiments: {
  //   outputModule: true,
  // },
  performance: false,
};
