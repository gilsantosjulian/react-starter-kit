const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/index.tsx'],
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/dist`,
  },
  devtool: 'source-map',
  resolve : {
    extensions: [
      '.js',
      '.ts',
      '.tsx',
      '.json',
    ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
};
