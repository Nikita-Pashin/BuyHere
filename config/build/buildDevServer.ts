import type { Configuration as DevMiddlewareOptions } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export const buildDevServer = ({ port }: BuildOptions): DevMiddlewareOptions => ({
  port,
  open: true,
  historyApiFallback: true,
  hot: true,
});
