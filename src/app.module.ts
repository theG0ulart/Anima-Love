import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { DataSource } from 'typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }),
  DatabaseModule,
  AuthModule,
  UsersModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly datSource: DataSource){}
}
