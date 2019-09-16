const path = require('path');
const DartSass = require('sass');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const Autoprefixer = require('autoprefixer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'boundle.[hash].js',
    publicPath: '/React-blog',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                Autoprefixer,
              ],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: DartSass,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    publicPath: '/React-blog',
    openPage: 'React-blog',
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin(),
      new OptimizeCSSAssetsPlugin(),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: './src/index.html',
      },
    ),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/styles.[contenthash].css',
    }),
  ],
};
