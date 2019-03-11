const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');

const getStyleLoaders = (cssOptions) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {}
    },
    {
      loader: require.resolve('css-loader'),
      options: cssOptions,
    },
    {
      // Options for PostCSS as we reference these options twice
      // Adds vendor prefixing based on your specified browser support in
      // package.json
      loader: require.resolve('postcss-loader'),
      options: {
        // Necessary for external CSS imports to work
        // https://github.com/facebook/create-react-app/issues/2677
        ident: 'postcss',
        plugins: () => [
          require('postcss-flexbugs-fixes'),
          require('postcss-preset-env')({
            autoprefixer: {
              flexbox: 'no-2009',
            },
            stage: 3,
          }),
        ],
        sourceMap: true,
      },
    },
  ].filter(Boolean);
  return loaders;
};


module.exports = () => (
  {
    mode: 'production',
    entry: './src/index.js',
    devtool:'eval-source-map',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'redux-task-calendar.js',
      libraryTarget: 'umd',
      globalObject: 'this',
      // libraryExport: 'default',
      library: 'redux-task-calendar'
    },
    externals: {
      react: "react",
      "react-dom": "react-dom",
    },
    node: {
      cldr: "empty",
      fs: "empty"
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
      }),
      // new BundleAnalyzerPlugin(),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /(node_modules)/,
          use: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: getStyleLoaders({
            importLoaders: 1,
            sourceMap: true,
          }),
          // Don't consider CSS imports dead code even if the
          // containing package claims to have no side effects.
          // Remove this when webpack adds a warning or an error for this.
          // See https://github.com/webpack/webpack/issues/6571
          sideEffects: true,
        },
      ]
    },
  }
);