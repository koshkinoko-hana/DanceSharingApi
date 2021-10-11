import { LoggerFactory, LoggerModule } from '@logger';
import { ClassSerializerInterceptor, Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { NestFactory, Reflector } from '@nestjs/core';
import { UserModule } from '@web/user';
import { ReflectMetadataProvider } from 'mikro-orm';
import { MikroOrmModule } from 'nestjs-mikro-orm';
import config from './config';
import * as entities from './entities';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: config,
    }),
    MikroOrmModule.forRootAsync({
      useFactory: (configService: ConfigService, loggerFactory: LoggerFactory) => {
        const logger = loggerFactory.getLogger().child('MikroORM');

        return {
          ...configService.get<any>('mikro-orm'),
          entities: Object.values(entities),
          logger: (message: string) => logger.trace(message),
          driverOptions: {
            connection: {
              timezone: 'Z',
            },
          },
          metadataProvider: ReflectMetadataProvider,
          cache: {
            enabled: false,
          },
          pool: {
            afterCreate: (conn: any, done: (err: any, conn: any) => void) => {
              const { auroraReplicaReadConsistency } = configService.get<any>('mikro-orm');
              if (auroraReplicaReadConsistency !== '') {
                conn.query(
                  'SET aurora_replica_read_consistency = ?',
                  [auroraReplicaReadConsistency],
                  (err: any) => done(err, conn),
                );

                return;
              }

              done(null, conn);
            },
          },
        };
      },
      inject: [ConfigService, LoggerFactory],
      imports: [LoggerModule],
    }),
  ],
})
export class MainModule {
  static async bootstrap() {
    const loggerFactory = new LoggerFactory();
    const logger = loggerFactory.getLogger().child(MainModule.name).child('bootstrap');

    logger.trace('>');

    const memBefore = process.memoryUsage().heapUsed / 1024 / 1024;
    logger.info(`Memory Usage (before startup): ${memBefore} MB`);

    const app = await NestFactory.create(MainModule, {
      logger: loggerFactory.getNestLogger(),
    });

    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        whitelist: true,
      }),
    );

    app.useGlobalInterceptors(new ClassSerializerInterceptor(new Reflector()));
    app.setGlobalPrefix('api');

    const expressConfig = {
      port: 3000,
      enableCors: true,
      corsOptions: {},
    };
    logger.traceObject({ expressConfig });

    if (expressConfig.enableCors) {
      app.enableCors(expressConfig.corsOptions);
    }

    await app.listen(expressConfig.port);

    const memAfter = process.memoryUsage().heapUsed / 1024 / 1024;
    logger.info(`Memory Usage (after startup): ${memAfter} MB`);
  }
}
