import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssWxtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export const buildPlugins = (options: BuildOptions): webpack.WebpackPluginInstance[] => {
  const plugins = [
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
  ];

  const devPlugins = [
    new webpack.HotModuleReplacementPlugin(),
  ];

  return [
    ...plugins,
    ...(options.isDev ? devPlugins : []),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
  ];
};
