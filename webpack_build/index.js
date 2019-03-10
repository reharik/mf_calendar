const webpackMerge = require('webpack-merge');
const baseConfig = require('./base-config');


module.exports = mode => {
  const envConfig = require(`./${mode}`);

  const x = webpackMerge.smart(baseConfig, envConfig, { mode });
  x.module.rules.forEach(z => console.log(JSON.stringify(z,null,4)));
  console.log(x);
  return x;
};
