var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        'bootstrap-loader',
        './src/main.tsx'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/assets/'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx'],
        modulesDirectories: ['node_modules']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            PRODUCTION: false,
        })
    ],
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loaders: ['ts']
            },
            {
                test: /\.js$/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            },
            { test: /\.css$/, loaders: [ 'style', 'css', 'postcss' ] },
            { test: /\.scss$/, loaders: [ 'style', 'css?sourceMap', 'postcss', 'sass?sourceMap' ] },
            { test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url?limit=10000' }
            ]
    },
    postcss: [autoprefixer]
};
