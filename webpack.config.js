const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  mode,
  entry: {
    app: path.join(__dirname, 'src', 'index.tsx'),
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  },
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [path.join(__dirname, 'src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html',
      minify:
        mode === 'production'
          ? {
              collapseWhitespace: true,
              removeComments: true,
            }
          : false,
    }),
    new CleanWebpackPlugin.CleanWebpackPlugin(),
  ],
};
