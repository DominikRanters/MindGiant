const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AppcacheWebpackPlugin = require('appcache-webpack-plugin');
const getBaseConfig = require('./base-config');

const ROOT_PATH = path.resolve('./');
const SHORTHAND = 'LH';
const PROJECT_NAME = 'staging';

module.exports = {
    ...getBaseConfig(false),
    output: {
        path: `//tappqa/Training/2019/${SHORTHAND}/${PROJECT_NAME}`,
        filename: '[name].bundle.js?[hash]',
        chunkFilename: '[name].chunk.js',
    },
    devtool: 'hidden-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(ROOT_PATH, 'src/index.staging.html'),
        }),
        new AppcacheWebpackPlugin({
            cache: ['https://api.chayns-static.space/js/v4.0/chayns.min.js'],
            output: 'cache.manifest',
        }),
        new webpack.DefinePlugin({
            __DEV__: false,
            __STAGING__: true,
            __LIVE__: false,
        }),
    ],
};
