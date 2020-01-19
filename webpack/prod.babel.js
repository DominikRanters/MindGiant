const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AppcacheWebpackPlugin = require('appcache-webpack-plugin');
const getBaseConfig = require('./base-config');

const ROOT_PATH = path.resolve('./');

module.exports = {
    ...getBaseConfig(false),
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(ROOT_PATH, 'src/index.html'),
        }),
        new AppcacheWebpackPlugin({
            cache: ['https://api.chayns-static.space/js/v4.0/chayns.min.js'],
            output: 'cache.manifest',
        }),
        new webpack.DefinePlugin({
            __DEV__: false,
            __STAGING__: false,
            __LIVE__: true,
        }),
    ],
};
