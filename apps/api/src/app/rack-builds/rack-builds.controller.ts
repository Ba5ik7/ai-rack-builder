import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { RackBuildsService } from './rack-builds.service';
import { BuildDocument } from './schemas/build.schema';

@Controller('rack-builds')
export class RackBuildsController {
  constructor(private readonly rackBuilds: RackBuildsService) {}

  @Post()
  createBuild(
    @Body() rackBuild: BuildDocument,
  ) {
    return this.rackBuilds.createBuild(rackBuild);
  }

  @Get()
  getBuilds() {
    return this.rackBuilds.getBuilds();
  }

  @Get(':id')
  getBuild(@Param('id') id: string) {
    return this.rackBuilds.getBuild(id);
  }

  @Post(':id')
  updateBuild(
    @Param('id') id: string,
    @Body() rackBuild: BuildDocument,
  ) {
    return this.rackBuilds.updateBuild(id, rackBuild);
  }

  @Delete(':id')
  deleteBuild(@Param('id') id: string) {
    return this.rackBuilds.deleteBuild(id);
  }
}
