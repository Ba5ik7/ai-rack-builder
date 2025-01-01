import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TBuildDocument = BuildDocument & Document;

/**
 * Types for BuildDocument:
 * *  title: string;
 * *  type: string;
 * *  description: string;
 * *  thumbnail: string;
 * *  rack: string | undefined;
 * *  rackComponents: string[];
 */
@Schema()
export class BuildDocument {

  @Prop({ required: true })
  title: string;
  
  @Prop({ required: true })
  type: string;
  
  @Prop({ required: true })
  description: string;

  @Prop({ default: 'https://via.placeholder.com/250/400' })
  thumbnail: string;

  @Prop({ default: () => undefined })
  rack: BuildType | undefined;

  @Prop({ default: [] })
  rackComponents: string[];
}

export const BuildDocumentSchema = SchemaFactory.createForClass(BuildDocument);

export enum BuildType {
  HOME_MINI_RACKS = 'HOME_MINI_RACKS',
  HOME_RACKS = 'HOME_RACKS',
  OFFICE_RACKS = 'OFFICE_RACKS',
  SERVER_RACKS = 'SERVER_RACKS',
  GAMING_RACKS = 'GAMING_RACKS',
  CUSTOM_RACKS = 'CUSTOM_RACKS'
}
