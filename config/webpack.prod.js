const path = require('path');
const webpackMerge = require('webpack-merge');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const commonWebPackConfiguration = require('./webpack.common');

module.exports = webpackMerge(commonWebPackConfiguration, {
  entry: [
    path.join(__dirname, '../src/indexWithServiceWorker.ts'),
  ],
  mode: 'production',
  plugins: [
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: 'webpack-service-worker.js',
      clientsClaim: true,
      skipWaiting: true,
      exclude: [/\.map$/, /asset-manifest\.json$/],
      importWorkboxFrom: 'local',
      navigateFallback: '/index.html',
    }),
  ]
});
