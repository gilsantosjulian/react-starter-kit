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
      '.scss',
      '.css',
      '.png',
      '.svg',
      '.jpeg',
      '.jpg',
    ],
    alias: {
      services: path.resolve(__dirname, '../src/services/'),
      config: path.resolve(__dirname, '../src/config/'),
      state: path.resolve(__dirname, '../src/state/'),
      pages: path.resolve(__dirname, '../src/components/pages/'),
      templates: path.resolve(__dirname, '../src/components/templates/'),
      organisms: path.resolve(__dirname, '../src/components/organisms/'),
      molecules: path.resolve(__dirname, '../src/components/molecules/'),
      atoms: path.resolve(__dirname, '../src/components/atoms/'),
      utils: path.resolve(__dirname, '../src/utils/'),
      assets: path.resolve(__dirname, '../src/assets/'),
      images: path.resolve(__dirname, '../src/assets/images/'),
      strings: path.resolve(__dirname, '../src/assets/strings/'),
      publicViewsStyles: path.resolve(__dirname, '../src/assets/styles/pages/public/'),
      privateViewsStyles: path.resolve(__dirname, '../src/assets/styles/pages/private/'),
      templatesStyles: path.resolve(__dirname, '../src/assets/styles/templates/'),
      organismsStyles: path.resolve(__dirname, '../src/assets/styles/organisms/'),
      moleculesStyles: path.resolve(__dirname, '../src/assets/styles/molecules/'),
      atomsStyles: path.resolve(__dirname, '../src/assets/styles/atoms/'),
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
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
            },
          },
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
      favicon: './public/favicon.png',
    }),
  ],
};
