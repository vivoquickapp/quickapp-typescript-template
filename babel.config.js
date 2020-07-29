module.exports = function(api) {
  api.cache(true)
  return {
    presets: [
      '@babel/preset-typescript'
    ],
    plugins: ['@babel/plugin-transform-modules-commonjs', '@babel/plugin-transform-typescript'],
    babelrcRoots: ['.', 'node_modules']
  }
}
