import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BuildOptions } from './types/config';
import MiniCssWxtractPlugin from 'mini-css-extract-plugin';

export const buildPlugins = (options: BuildOptions): webpack.WebpackPluginInstance[] => ([
  new webpack.ProgressPlugin(),
  new HtmlWebpackPlugin({
    template: options.paths.html,
  }),
  new MiniCssWxtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/chunk.[name].[contenthash:8].css',
  }),
])