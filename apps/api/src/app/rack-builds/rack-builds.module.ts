import { Module } from '@nestjs/common';
import { RackBuildsService } from './services/rack-builds.service';
import { RackBuildsController } from './controllers/rack-builds.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BuildDocument, BuildDocumentSchema } from './schemas/build.schema';
import {
  RackComponentDocument,
  RackComponentDocumentSchema,
} from './schemas/rack-components.schema';
import { RackDocument, RackDocumentSchema } from './schemas/rack.schema';
import { RacksService } from './services/racks.service';
import { RackComponentsService } from './services/rack-components.service';
import { RackComponentsController } from './controllers/rack-components.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BuildDocument.name, schema: BuildDocumentSchema },
      { name: RackComponentDocument.name, schema: RackComponentDocumentSchema },
      { name: RackDocument.name, schema: RackDocumentSchema },
    ]),
  ],
  providers: [RackBuildsService, RacksService, RackComponentsService],
  controllers: [RackBuildsController, RackComponentsController],
})
export class RackBuildsModule {}
