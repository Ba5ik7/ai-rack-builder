import { Module } from '@nestjs/common';
import { RackBuildsService } from './rack-builds.service';
import { RackBuildsController } from './rack-builds.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BuildDocument, BuildDocumentSchema } from './schemas/build.schema';
import {
  RackComponentDocument,
  RackComponentDocumentSchema,
} from './schemas/rack-components.schema';
import { RackDocument, RackDocumentSchema } from './schemas/rack.schema';
import { RacksService } from './services/racks.service';
import { RackComponentsService } from './services/rack-components.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BuildDocument.name, schema: BuildDocumentSchema },
      { name: RackComponentDocument.name, schema: RackComponentDocumentSchema },
      { name: RackDocument.name, schema: RackDocumentSchema },
    ]),
  ],
  providers: [RackBuildsService, RacksService, RackComponentsService],
  controllers: [RackBuildsController],
})
export class RackBuildsModule {}
