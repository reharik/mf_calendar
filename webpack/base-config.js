const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');


const {
  appEntry, contextPath, outputPath,
  resolveAliasPaths, resolveAliasModules
} = require('./base-params');


const baseConfig = {
  context: contextPath,

  entry: {
    app: [ appEntry ]
  },

  output: {
    path: outputPath,
    publicPath: './',
    filename: 'file.[name].[hash:4].js',
    chunkFilename: 'chunk.[name].[chunkhash:4].js',
    globalObject: 'this'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            // This is a feature of `babel-loader` for Webpack (not Babel itself).
            // It enables caching results in ./node_modules/.cache/babel-loader/
            // directory for faster rebuilds.
            cacheDirectory: true
          }
        }]
      },
    ]
  },

  plugins: [
    new ErrorOverlayPlugin(),

    new CaseSensitivePathsPlugin({
      debug: false
    }),

    new HtmlWebpackPlugin({
      template: 'index.html',
      meta: {
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1'
      },
      inject: true,
      hash: true,
      cache: true,
      showErrors: true,
      chunksSortMode: 'auto'
    }),

    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    })
  ],

  optimization: {
    noEmitOnErrors: true,
    namedModules: true,
    namedChunks: true
  },

  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    },
    extensions: ['.js'],
    enforceExtension: false,
  }
};


module.exports = baseConfig;
