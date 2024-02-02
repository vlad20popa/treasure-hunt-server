import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Race, RaceSchema } from './race.schema';
import { RaceController } from '../../controllers/race/race.controller';
import { RaceService } from '../../services/RaceService';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Race.name, schema: RaceSchema }]),
  ],
  controllers: [RaceController],
  providers: [RaceService],
})
export class RaceModule {}
