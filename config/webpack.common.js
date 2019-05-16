const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: [
      '.js',
      '.ts',
      '.tsx',
      '.json',
    ],
    alias: {
      config: path.resolve(__dirname, '../src/config/'),
      views: path.resolve(__dirname, '../src/views/'),
      utils: path.resolve(__dirname, '../src/utils/'),
      assets: path.resolve(__dirname, '../src/assets/'),
      publicViewsStyle: path.resolve(__dirname, '../src/assets/styles/views/public/'),
      privateViewsStyle: path.resolve(__dirname, '../src/assets/styles/views/private/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx|.ts?$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'source-map-loader',
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css|.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true,
              camelCase: true,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
};
