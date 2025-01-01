import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TRackComponentDocument = RackComponentDocument & Document;

/**
 * Types for RackComponentDocument:
 * *  title: string;
 * *  type: string;
 * *  description: string;
 * *  price: number;
 * *  powerConsumption: number;
 * *  computeUnits: number;
 * *  memory: number;
 * *  storage: number;
 * *  thumbnail: string;
 */
@Schema()
export class RackComponentDocument {

  @Prop({ default: () => 'Rack Component' })
  title: string;
  
  @Prop({ required: true })
  type: string;
  
  @Prop({ required: true })
  description: string;
  
  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  powerConsumption: number;

  @Prop({ required: true })
  computeUnits: number;

  @Prop({ required: true })
  memory: number;

  @Prop({ required: true })
  storage: number;

  @Prop({ 
    required: true,
    default: 'https://via.placeholder.com/250/400',
  })
  thumbnail: string;
}

export const RackComponentDocumentSchema = SchemaFactory.createForClass(RackComponentDocument);
