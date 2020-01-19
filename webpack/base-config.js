const path = require('path');

const ROOT_PATH = path.resolve('./');

module.exports = (dev = false) => {
    const config = {
        entry: {
            'example.bundle': [path.resolve('src/index')],
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
        output: {
            path: path.resolve(ROOT_PATH, 'build'),
            filename: `[name].js?${dev ? '' : '[chunkhash]'}`,
            chunkFilename: '[name].chunk.js',
            publicPath: '',
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: [
                        {
                            loader: 'babel-loader',
                        },
                    ],
                    exclude: /node_modules/,
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        {
                            loader: 'style-loader',
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                },
            ],
        },
    };
    return config;
};
