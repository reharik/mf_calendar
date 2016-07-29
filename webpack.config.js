var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const autoprefixer = require('autoprefixer');
const precss = require('precss');
const postcssImport = require('postcss-import');

var node_modules = __dirname + '/node_modules';

const config = {
    // Gives you sourcemaps without slowing down rebundling
  devtool: 'cheap-module-eval-source-map',
  resolve: { alias: {} },
  entry: {
        // app: './app/src/index.js'
    app: './example/index.js'
  },
  output: {
    path: path.join(__dirname, '/dist/'),
    sourceMapFilename: '[file].map',
    filename: 'mf_calendar.js',
    publicPath: '/'
  },
  module: {
    noParse: [],
    loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader']},
      {
        test: /\.css$/,
        include: [ path.resolve(__dirname, 'app/css'), path.resolve(__dirname, 'example/css/app.css') ],
                // loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[local]!postcss-loader')
        loader: 'style!css-loader?sourceMap=1&modules&importLoaders=1&localIdentName=[local]!postcss-loader'
      },
      {
        "test": /\.json$/,
        "loader": "json"
      }
            // { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            // { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            // { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
            // { test: /\.png$/, loader: "url-loader", query: { mimetype: "image/png" } },
            // { test: /\.jpg$/, loader: "url-loader", query: { mimetype: "image/jpg" } },
            // { test: /\.gif$/, loader: "url-loader", query: { mimetype: "image/gif" } },
            // { test: /\.scss$/, loaders: ["style", "css?sourceMap", "css?sourceMap"] },
            // { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loaders: ['url-loader?limit=10000&mimetype=application/font-woff' ] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/example/index.tmpl.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('mf_calendar.css', { allChunks: true}),
    new webpack.IgnorePlugin(/regenerator|nodent|js\-beautify/, /ajv/)
  ],

  postcss() {
    return [
      precss,
      postcssImport({
        addDependencyTo: webpack
      }),
      autoprefixer
    ];
  },
  devServer: {
    contentBase: './dist',
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true,
    stats: 'errors-only'
  },
    // sassLoader: {
    //     includePaths: [path.resolve(__dirname, "./css")]
    // },
    // ignore packages that are not available in browser. e.g. fs
  externals: {
    cldr: 'empty'
  }
};

module.exports = config;
