module.exports = {
  tsconfig: './tsconfig.json',
  typescript: {
    jsx: 'react-jsx', // explicitly set the JSX setting here
  },
  rollup(config) {
    // Make sure the rollup configuration is correct or omitted if not needed
    return config;
  },
};
