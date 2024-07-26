import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { DataSource } from 'typeorm';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }),
  DatabaseModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly datSource: DataSource){}
}
