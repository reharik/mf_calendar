const webpack = require('webpack');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require("path");

const {
  contentBasePath,  host, port
} = require('./base-params');

const cssImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');


module.exports = {
  devtool: 'eval-source-map',

  devServer: {
    https: false,
    host,
    port,

    open: false,                  // Open the page in browser
    // contentBase: '/public/', // Content not from webpack is served from here

    historyApiFallback: true,
    compress: true,

    hot: true,

    // Don't refresh if hot loading fails. Good while
    // implementing the client interface.
    hotOnly: true,
    inline: true,

    //capturing compilation related warnings and errors
    overlay: true,

    // publicPath: '/public/',
    // --progress - [assets, children, chunks, colors, errors, hash, timings, version, warnings]
    stats: {
      assets: true,

      // Add build date and time information
      builtAt: true,

      // Add information about cached (not built) modules
      cached: true,

      // Show cached assets (setting this to `false` only shows emitted files)
      cachedAssets: true,

      children: true,
      chunks: false,
      colors: true,

      // Display the distance from the entry point for each module
      depth: false,
      // Display the entry points with the corresponding bundles
      entrypoints: false,

      errors: true,
      errorDetails: true, //depends on {errors: true}
      hash: true,
      modules: false,
      moduleTrace: true,
      performance: true,
      providedExports: true,
      publicPath: true,
      reasons: true,
      source: true,
      usedExports: false,
      timings: true,
      version: true,
      warnings: true
    }
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        include: /node_modules/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: ExtractCssChunks.loader,
            options: {
              hot: true, // if you want HMR - we try to automatically inject hot reloading but if it's not working, add it to the config
              modules: true, // if you use cssModules, this can help.
              reloadAll: true, // when desperation kicks in - this is a brute force HMR flag

            }
          },
          {
            loader: 'css-loader',
            options: {
              import: false,
              url: true,
              modules: true,
              // localIdentName: '[folder]__[local]--[hash:base64:4]',
              localIdentName: '[folder]__[local]',
              sourceMap: true,
              camelCase: false,
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              ident: 'postcss',
              plugins: loader => [
                cssImport({
                  path: ['components'],
                  skipDuplicates: true
                }),
                postcssPresetEnv({
                  stage: 2,
                  features: {
                    'nesting-rules': true
                  }
                }),
              ]
            }
          }
        ]
      }
    ]
  },

  plugins: [
    // see webpack.EnvironmentPlugin(["NODE_ENV"])
    new webpack.DefinePlugin({
      'process.env': {
        TBP_API: JSON.stringify('http://localhost:80'),
        NODE_ENV: JSON.stringify('development'),
        SCHEME: JSON.stringify('http'),
        HOST: JSON.stringify(host),
        PORT: port
      }
    }),

    // Enable the plugin to let webpack communicate changes
    // to WDS. --hot sets this automatically!
    // Enable multi-pass compilation for enhanced performance
    // in larger projects. Good default.
    new webpack.HotModuleReplacementPlugin({
      multiStep: false
    }),

    new ExtractCssChunks({
      filename: '[name].[contenthash:4].css',
      chunkFilename: '[name].[contenthash:4].[id].css',
      orderWarning: true
    }),

    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 2, // Must be greater than or equal to one
      minChunkSize: 1000
    }),
    new CleanWebpackPlugin({
      root: path.resolve(__dirname, ".."),
      verbose: true,
      dry: false
    }),
  ]
};



