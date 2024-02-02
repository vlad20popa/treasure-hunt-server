import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RaceDocument = HydratedDocument<Race>;

@Schema()
export class Race {
  @Prop()
  name: string;

  @Prop()
  locationNumbers: number;

  @Prop()
  photo: string;

  @Prop()
  startingPosition: string;
}

export const RaceSchema = SchemaFactory.createForClass(Race);
