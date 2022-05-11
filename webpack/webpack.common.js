// eslint-disable-next-line @typescript-eslint/no-var-requires
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const paths = require('./paths');

const cleanOptions = {
  verbose: true,
  cleanOnceBeforeBuildPatterns: [paths.output],
};

module.exports = {
  module: {
    rules: [
      {
        test: /\.png/,
        type: 'asset/inline',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      // {
      //   test: /\.js$/,
      //   exclude: ['/node_modules/'],
      //   use: {
      //     loader: 'babel-loader',
      //   },
      // },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
      },

      // {
      //
      //   exclude: ['/node_modules/'],
      //   use: [
      //     {
      //       loader: 'ts-loader',
      //       options: {
      //         // disable type checker - we will use it in fork plugin
      //         transpileOnly: true,
      //       },
      //     },
      //   ],
      // },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    // https://github.com/TypeStrong/fork-ts-checker-webpack-plugin
    // new ForkTsCheckerWebpackPlugin({
    //   eslint: {
    //     files: paths.eslintGlob,
    //   },
    // }),
    new CleanWebpackPlugin(cleanOptions),
  ],
  stats: {
    errorDetails: true,
  },
};
