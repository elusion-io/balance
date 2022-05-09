/* eslint-disable @typescript-eslint/no-var-requires */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { DataSource, DataSourceOptions } from 'typeorm';
import { DatabaseService } from './database.service';
import databaseConfig from '../../config/database.config';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  providers: [DatabaseService, ConfigService],
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forRoot({ load: [databaseConfig] })],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        Object.assign(configService.get<DataSourceOptions>('database'), {
          autoLoadEntities: true,
          namingStrategy: new SnakeNamingStrategy(),
        }),
      connectionFactory: async (options) => {
        const AppDataSource = new DataSource(options);

        AppDataSource.initialize()
          .then(() => {
            console.log('Data Source has been initialized!');
          })
          .catch((err) => {
            console.error('Error during Data Source initialization', err);
          });

        return AppDataSource;
      },
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}