import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { RackBuildsModule } from './rack-builds/rack-builds.module';

@Module({
  imports: [RackBuildsModule],
  providers: [AppService],
})
export class AppModule {}
