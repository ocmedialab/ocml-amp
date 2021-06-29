const path = require('path');

module.exports = {
  entryDev: path.resolve(__dirname, '../src/index.tsx'),
  entryProd: path.resolve(__dirname, '../src/index.ts'),
  output: path.resolve(__dirname, '../dist'),
  template: path.resolve(__dirname, '../webpack/index.html'),
  contentBase: path.resolve(__dirname, '../dist'),
  eslintGlob: path.resolve(__dirname, '../src/**/*.{ts,tsx,js}'),
};
