var path = require('path')
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const autoprefixer = require('autoprefixer');
const precss = require('precss');
const postcssImport = require('postcss-import');

var node_modules = __dirname + '/node_modules';

const config = {
    // Gives you sourcemaps without slowing down rebundling
    devtool  : 'cheap-module-eval-source-map',
    resolve: { alias: {} },
    entry    : [
        'webpack-dev-server/client?http://0.0.0.0:8080',
        './example/index.js'],
    output   : {
        path      : path.join(__dirname, '/dist/'),
        filename  : 'bundle.js',
        publicPath: '/'
    },
    module   : {
        noParse:[],
        loaders: [
            { test   : /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader']},
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'app/sass'),
                // loader: ExtractTextPlugin.extract(style-loader, css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader)
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[local]!postcss-loader')
            }
            // { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            // { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            // { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
            // { test: /\.png$/, loader: "url-loader", query: { mimetype: "image/png" } },
            // { test: /\.jpg$/, loader: "url-loader", query: { mimetype: "image/jpg" } },
            // { test: /\.gif$/, loader: "url-loader", query: { mimetype: "image/gif" } },
            // { test: /\.scss$/, loaders: ["style", "css?sourceMap", "sass?sourceMap"] },
            // { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loaders: ['url-loader?limit=10000&mimetype=application/font-woff' ] }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/example/index.tmpl.html"
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('bundle.css', { allChunks: true })
    ],

    postcss() {
        return [
            postcssImport({
                addDependencyTo: webpack
            }),
            precss,
            autoprefixer
        ];
    },
    devServer: {
          contentBase       : "./dist",
          colors            : true,
          historyApiFallback: true,
          inline            : true,
          hot               : true
    },
    // sassLoader: {
    //     includePaths: [path.resolve(__dirname, "./sass")]
    // },
    // ignore packages that are not available in browser. e.g. fs
    externals: {
        cldr: "empty"
    }
};

module.exports = config;