const path = require('path');
const webpackMerge = require('webpack-merge');
const commonWebPackConfiguration = require('./webpack.common');

module.exports = webpackMerge(commonWebPackConfiguration, {
  entry: [
    path.join(__dirname, '../src/index.tsx'),
  ],
  mode: 'development',
  devServer: {
    hot: true,
    compress: true,
    port: 3000,
    historyApiFallback: true,
    open: true,
  },
});