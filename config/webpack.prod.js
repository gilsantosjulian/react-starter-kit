const path = require('path');
const webpackMerge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const commonWebPackConfiguration = require('./webpack.common');

module.exports = webpackMerge(commonWebPackConfiguration, {
  entry: [
    path.join(__dirname, '../src/indexWithServiceWorker.ts'),
  ],
  mode: 'production',
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../src/serviceWorker.js'), 
        to: 'serviceWorker.js',
      },
    ]),
  ]
});
