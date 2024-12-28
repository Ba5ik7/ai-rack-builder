import { Module } from '@nestjs/common';
import { RackBuildsService } from './rack-builds.service';
import { RackBuildsController } from './rack-builds.controller';

@Module({
  providers: [RackBuildsService],
  controllers: [RackBuildsController],
})
export class RackBuildsModule {}
