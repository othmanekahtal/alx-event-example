import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env['POSTGRES_HOST'],
      port: ~~process.env['POSTGRES_PORT'],
      username: process.env['POSTGRES_USER'],
      password: process.env['POSTGRES_PASSWORD'],
      database: process.env['POSTGRES_DATABASE'],
      autoLoadEntities: true,
      synchronize: true,
      entities: [],
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
