const path = require('path');
const webpack = require('webpack');
const include = path.join(__dirname, 'src');

/**
 * Production Webpack Config bundles JS, then uglifies it and exports it to the "dist" directory
 * See Development webpack config for detailed comments
 */
module.exports = {
  mode: 'production',

  entry: ['babel-regenerator-runtime', path.resolve(__dirname, 'src')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader'
        },
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.module\.css/,
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]---[hash:base64:5]',
              importLoaders: 1
            }
          },
          'postcss-loader'
        ],
        include
      }
    ]
  }
};
