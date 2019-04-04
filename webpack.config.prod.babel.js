const path = require('path');
const webpack = require('webpack');

/**
 * Production Webpack Config bundles JS, then uglifies it and exports it to the "dist" directory
 * See Development webpack config for detailed comments
 */
module.exports = {
    mode: 'production',

    entry: [
        'babel-regenerator-runtime',
        path.resolve(__dirname, 'src')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },

    resolve: {
        extensions: ['.js', '.json', '.jsx'],
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: {
                loader: 'babel-loader'
            },
            include: path.resolve(__dirname, 'src')
        }]
    }
};