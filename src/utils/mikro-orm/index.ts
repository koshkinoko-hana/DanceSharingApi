import { Logger } from '@logger';
import { HttpException, NotFoundException, Type } from '@nestjs/common';
import { Dictionary, IPrimaryKey } from 'mikro-orm';

export type HandlerFn = (entityName: string, where: Dictionary | IPrimaryKey | any) => Error;

export interface FailHandlerOptions {
  message: (entityName: string) => string;
  logLevel: keyof Pick<Logger, 'trace' | 'debug' | 'info' | 'warn' | 'error'>;
  exception: Type<HttpException>;
  logMsg?: string;
}

export function failHandler(logger: Logger, options: FailHandlerOptions) {
  return (entityName: string, where: Dictionary | IPrimaryKey | any): Error => {
    const err = new options.exception(options.message(entityName));
    logger[options.logLevel]({ err, entityName, where }, `! ${options.logMsg || 'not found'}`);
    return err;
  };
}

export function notFoundHandler(logger: Logger, options?: Partial<FailHandlerOptions>): HandlerFn {
  return failHandler(logger, {
    exception: NotFoundException,
    message: (entityName) => `${entityName} not found!`,
    logLevel: 'info',
    ...options,
  });
}
