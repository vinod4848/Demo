import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OderDocument = Oder & Document;

@Schema({ timestamps: true })
export class Oder {

  @Prop({ required: true })
  brand: string;

  @Prop({ required: true })
  transactionType: string;

  @Prop({ required: true })
  totalOrders: string;
  

  @Prop({ required: true })
  totalOrderValue: number;

  @Prop({ required: true })
  grossMarginPercentage: number;
}

export const OderSchema = SchemaFactory.createForClass(Oder);
