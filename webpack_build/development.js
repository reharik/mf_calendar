const webpack = require("webpack");

const {
  contentBasePath,
  cssPaths,
  host,
  port,
  postcssPaths
} = require("./base-params");

const cssImport = require("postcss-import");
const postcssPresetEnv = require("postcss-preset-env");
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");

module.exports = {
  devtool: "eval-source-map",

  module: {
    rules: [
      {
        // "oneOf" will traverse all following loaders until one will
        // match the requirements. When no loader matches it will fall
        // back to the "file" loader at the end of the loader list.
        oneOf: [
          {
            test: /\.css$/,
            include: /node_modules/,
            loaders: ["style-loader", "css-loader"]
          },
          {
            test: /\.css$/,
            include: cssPaths,
            use: [
              {
                loader: ExtractCssChunks.loader,
                options: {
                  hot: true, // if you want HMR - we try to automatically inject hot reloading but if it's not working, add it to the config
                  modules: true, // if you use cssModules, this can help.
                  reloadAll: true // when desperation kicks in - this is a brute force HMR flag
                }
              },
              {
                loader: "css-loader",
                options: {
                  import: false,
                  url: true,
                  modules: true,
                  // localIdentName: '[folder]__[local]--[hash:base64:4]',
                  localIdentName: "[folder]__[local]",
                  sourceMap: true,
                  camelCase: false,
                  importLoaders: 1
                }
              },
              {
                loader: "postcss-loader",
                options: {
                  sourceMap: true,
                  ident: "postcss",
                  plugins: loader => [
                    cssImport({
                      root: postcssPaths,
                      skipDuplicates: true
                    }),
                    postcssPresetEnv({
                      stage: 2,
                      features: {
                        "nesting-rules": true
                      }
                    }),
                  ]
                }
              }
            ]
          }
        ]
      }
    ]
  },

  plugins: [
    // // Enable the plugin to let webpack communicate changes
    // // to WDS. --hot sets this automatically!
    // // Enable multi-pass compilation for enhanced performance
    // // in larger projects. Good default.
    // new webpack.HotModuleReplacementPlugin({
    //   multiStep: false
    // }),

    new ExtractCssChunks({
      filename: "[name].css",
      chunkFilename: "[name].[contenthash:4].[id].css",
      orderWarning: true,
      // reloadAll: true, // when desperation kicks in - this is a brute force HMR flag
      hot: true, // if you want HMR - we try to automatically inject hot reloading but if it's not working, add it to the config
    }),

    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 2, // Must be greater than or equal to one
      minChunkSize: 1000
    })
  ]
};
