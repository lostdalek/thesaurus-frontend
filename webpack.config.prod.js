var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
    devtool: 'source-map',
    entry: [
        'bootstrap-loader/extractStyles',
        './src/main.tsx'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/assets/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new ExtractTextPlugin("main.css", {allChunks: true})
    ],
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx'],
        modulesDirectories: ['node_modules']
    },
    module: {
        loaders: [{
            test: /\.tsx?$/,
            loaders: ['ts']
        },
            {
                test: /\.js$/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            },
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css!postcss')},
            {test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')},
            {test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url?limit=10000'},
            {test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery'}]
    },
    postcss: [autoprefixer]
};
