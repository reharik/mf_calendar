var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

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
            { test   : /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader']}
            // { test: /\.css$/, loader: 'style-loader!css-loader?sourceMap' },
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
        new webpack.NoErrorsPlugin()
    ],
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