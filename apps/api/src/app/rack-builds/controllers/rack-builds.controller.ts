import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { RackBuildsService } from '../services/rack-builds.service';
import { BuildDocument } from '../schemas/build.schema';

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
  getBuildById(@Param('id') id: string) {
    console.log(id)
    return this.rackBuilds.getBuildById(id);
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
