const path = require('path');
const appRoot = 'example';


module.exports = {
  appEntry: './index.js',
  contentBasePath: path.resolve(__dirname, '..', appRoot),
  contextPath: path.resolve(__dirname, '..', appRoot),

 

  // Parse host and port from env to allow customization.
  //
  // If you use Docker, Vagrant or Cloud9, set
  // host: options.host || "0.0.0.0";
  //
  // 0.0.0.0 is available to all network devices
  // unlike default `localhost`.
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 8000,

  
  outputPath: path.resolve(__dirname, '..', 'public'),


};


// https://www.npmjs.com/package/loader-utils#interpolatename
