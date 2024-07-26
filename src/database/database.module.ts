import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('SUPABASE_HOST'),
        port: configService.get<number>('SUPABASE_PORT'),
        username: configService.get<string>('SUPABASE_USER'),
        password: configService.get<string>('SUPABASE_PASSWORD'),
        database: configService.get<string>('SUPABASE_DATABASE'),
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}