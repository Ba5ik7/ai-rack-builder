import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { RackBuildsModule } from './rack-builds/rack-builds.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('MONGODB_URI'),
        serverSelectionTimeoutMS: 5000,  // Timeout in 5 seconds
      }),
    }),
    RackBuildsModule],
  providers: [AppService],
})
export class AppModule {}
