import { Controller, Get } from '@nestjs/common';
import { RackBuildsService } from './rack-builds.service';

@Controller('rack-builds')
export class RackBuildsController {
  constructor(private readonly rackBuilds: RackBuildsService) {}

  @Get()
  getData() {
    return this.rackBuilds.getData();
  }
}
