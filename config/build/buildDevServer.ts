import { BuildOptions } from './types/config';
import type { Configuration as DevMiddlewareOptions } from 'webpack-dev-server';

export const buildDevServer = ({ port }: BuildOptions): DevMiddlewareOptions => ({
  port: port,
  open: true,
  historyApiFallback: true,
});
