import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TRackDocument = RackDocument & Document;

/**
 * Types for RackDocument:
 * *  title: string;
 * *  type: string;
 * *  description: string;
 * *  price: number;
 * *  size: number;
 * *  thumbnail: string;
 */
@Schema()
export class RackDocument {

  @Prop({ default: () => 'Page' })
  title: string;
  
  @Prop({ required: true })
  type: string;
  
  @Prop({ required: true })
  description: string;
  
  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  size: number;

  @Prop({ 
    required: true,
    default: 'https://via.placeholder.com/250/400',
  })
  thumbnail: string;
}

export const RackDocumentSchema = SchemaFactory.createForClass(RackDocument);
