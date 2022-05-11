module.exports = (api) => {
  api.cache(true);

  const presets = ['@babel/env', '@babel/react', '@babel/preset-typescript'];
  // const plugins = ['@babel/plugin-syntax-jsx', '@babel/plugin-transform-react-jsx'];
  const plugins = [];

  return {
    presets,
    plugins,
  };
};
