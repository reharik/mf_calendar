const path = require("path");
const webpack = require("webpack");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const MomentTimezoneDataPlugin = require('moment-timezone-data-webpack-plugin');
const {
  appEntry,
  contextPath,
  fontPathEntry,
  imagePathEntry,
  outputPath,
} = require("./base-params");

const baseConfig = {
  context: contextPath,

  entry: [appEntry],

  output: {
    path: outputPath,
    publicPath: "./",
    filename: 'redux-task-calendar.js',
    libraryTarget: 'umd',
    globalObject: "this"
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
  node: {
    cldr: 'empty',
    fs: 'empty',
  },
  module: {
    rules: [
      // First, run the linter.
      // It's important to do this before Babel processes the JS.
      {
        test: /\.(js|mjs|jsx)$/,
        enforce: "pre",
        use: [
          {
            options: {
              formatter: require.resolve("react-dev-utils/eslintFormatter"),
              eslintPath: require.resolve("eslint")
            },
            loader: require.resolve("eslint-loader")
          }
        ],
        include: contextPath
      },
      {
        // "oneOf" will traverse all following loaders until one will
        // match the requirements. When no loader matches it will fall
        // back to the "file" loader at the end of the loader list.
        oneOf: [
          {
            test: /\.js$/,
            include: contextPath,
            use: [
              {
                loader: "babel-loader",
                options: {
                  // This is a feature of `babel-loader` for Webpack (not Babel itself).
                  // It enables caching results in ./node_modules/.cache/babel-loader/
                  // directory for faster rebuilds.
                  cacheDirectory: true
                }
              }
            ]
          },
          {
            test: /\.js$/,
            include: path.resolve(__dirname, "..", `src/assets/vendors`),
            use: [
              {
                loader: "file-loader",
                options: {
                  name: "[path][name].[ext]",
                  context: `${contextPath}/assets`
                }
              }
            ]
          },
          {
            test: /\.(eot|ttf|otf|woff|woff2)$/,
            include: fontPathEntry,
            use: [
              {
                loader: "url-loader",
                options: {
                  // Limit at 50Kb. Above that it emits separate files
                  limit: 50000,
                  name: "./fonts/[name].[hash:4].[ext]"
                }
              }
            ]
          },
          {
            test: /\.(png|svg|jpg)$/,
            include: imagePathEntry,
            use: [
              {
                loader: "url-loader",
                options: {
                  // Limit at 25Kb. Above that it emits separate files
                  limit: 25000,
                  name: "./images/[name].[hash:4].[ext]"
                }
              }
            ]
          }
        ]
      }
    ]
  },

  plugins: [
    new ErrorOverlayPlugin(),

    new CaseSensitivePathsPlugin({
      debug: false
    }),

    // This gives some necessary context to module not found errors, such as
      // the requesting resource.
      new ModuleNotFoundPlugin(contextPath),
      new MiniCssExtractPlugin({
        filename: "[name].css",
      }),
      new MomentLocalesPlugin(),
      new MomentTimezoneDataPlugin({
        matchZones: ['America/New_York']
      }),
  ],

  node: {
    cldr: "empty",
    fs: 'empty',
  },
  
  optimization: {
    noEmitOnErrors: true,
    namedModules: true,
    namedChunks: true
  },

  // resolve: {
  //   alias: resolveAliasPaths,
  //   extensions: [".js"],
  //   enforceExtension: false,
  //   modules: resolveAliasModules
  // }
};

module.exports = baseConfig;
