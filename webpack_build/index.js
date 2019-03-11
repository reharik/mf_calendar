const webpackMerge = require('webpack-merge');
const baseConfig = require('./base-config');


module.exports = mode => {
  const envConfig = require(`./${mode}`);

  return webpackMerge.smart(baseConfig, envConfig, { mode });
};
