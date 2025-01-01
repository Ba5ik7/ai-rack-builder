import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { RackComponentsService } from '../services/rack-components.service';
import { RackComponentDocument } from '../schemas/rack-components.schema';

@Controller('rack-components')
export class RackComponentsController {
  constructor(private readonly rackComponentsService: RackComponentsService) {}

  @Post()
  createRackComponent(@Body() rackComponent: RackComponentDocument) {
    return this.rackComponentsService.createRackComponent(rackComponent);
  }

  @Get()
  getRackComponents() {
    return this.rackComponentsService.getRackComponents();
  }

  @Get(':id')
  getRackComponentById(@Param('id') id: string) {
    console.log(id)
    return this.rackComponentsService.getRackComponentById(id);
  }

  @Post(':id')
  updateRackComponent(
    @Param('id') id: string,
    @Body() rackComponent: RackComponentDocument
  ) {
    return this.rackComponentsService.updateRackComponent(id, rackComponent);
  }

  @Delete(':id')
  deleteRackComponent(@Param('id') id: string) {
    return this.rackComponentsService.deleteRackComponent(id);
  }
}
