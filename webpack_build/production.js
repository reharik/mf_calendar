const path = require("path");
const webpack = require("webpack");

const TerserPlugin = require("terser-webpack-plugin");
const postcssPresetEnv = require("postcss-preset-env");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  recordsPath: path.resolve(__dirname, "..", "./records.json"),
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
  module: {
    rules: [
      {
        // "oneOf" will traverse all following loaders until one will
        // match the requirements. When no loader matches it will fall
        // back to the "file" loader at the end of the loader list.
        oneOf: [
          {
            test: /\.css$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
              },
              {
                loader: "css-loader",
                options: {
                  import: true,
                  url: true,
                  localIdentName: 'redux__task__calendar__[local]',
                  sourceMap: false,
                  camelCase: false,
                  importLoaders: 1
                }
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  ident: "postcss",
                  plugins: loader => [
                    require('postcss-flexbugs-fixes'),
                    postcssPresetEnv({
                      stage: 2,
                      features: {
                        "nesting-rules": true,
                        flexbox: 'no-2009',
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
    new CleanWebpackPlugin({
      root: path.resolve(__dirname, ".."),
      verbose: true,
      dry: false
    }),
  ],

  optimization: {
    concatenateModules: true,
    namedModules: true,
    namedChunks: true,

    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        cache: true,
        parallel: true,
        terserOptions: {
          ie8: false,
          keep_classnames: false,
          keep_fnames: false,
          safari10: false
        },
        extractComments: true
      })
    ],
  },

  performance: {
    hints: "warning", // "error" or false are valid too
    maxEntrypointSize: 50000, // in bytes, default 250k
    maxAssetSize: 450000 // in bytes
  }
};
