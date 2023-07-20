import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssWxtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export const buildPlugins = (options: BuildOptions): webpack.WebpackPluginInstance[] => ([
  new webpack.ProgressPlugin(),
  new HtmlWebpackPlugin({
    template: options.paths.html,
  }),
  new MiniCssWxtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/chunk.[name].[contenthash:8].css',
  }),
  new webpack.DefinePlugin({
    __IS_DEV__: JSON.stringify(options.isDev),
  }),
  new ReactRefreshWebpackPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new BundleAnalyzerPlugin({
    openAnalyzer: false,
  }),
]);
