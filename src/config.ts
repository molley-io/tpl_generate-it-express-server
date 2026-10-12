import dotenv from 'dotenv';
import { ProcEnvHelper } from 'proc-env-helper';
import { AppMiddlewareOptions } from '@/http/nodegen/middleware';

dotenv.config();

/**
 * Add and remove config that you need.
 * Centralizing config into a single file.
 * Import this config file into your code opposed to hiding process.env everywhere.
 */
export default {
  // Instance
  env: ProcEnvHelper.getOrSetDefault('NODE_ENV', 'production'),
  port: ProcEnvHelper.getOrSetDefault('PORT', 8080),

  // Logger mode - Controls console.log verbosity
  // This is not another customer logger package, use console.<method> directly
  // Options: 'error', 'warn', 'info', 'log', 'debug', 'verbose'
  // Each level includes all higher priority levels (e.g., 'info' includes 'error' and 'warn')
  loggerMode: ProcEnvHelper.getOrSetDefault('LOGGER_MODE', 'development'),

  // Middleware config injections, eg helmet, cors, authentication, see AppMiddlewareOptions
  appMiddlewareOptions: {} as AppMiddlewareOptions,
};
