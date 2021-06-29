module.exports = (api) => {
  api.cache(true);

  const presets = [];
  // const plugins = ['@babel/plugin-syntax-jsx', '@babel/plugin-transform-react-jsx'];
  const plugins = [];

  return {
    presets,
    plugins,
  };
};
