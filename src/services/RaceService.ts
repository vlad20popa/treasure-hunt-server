import { Injectable } from '@nestjs/common';
import { Race } from '../schemas/race/race.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateRaceDto } from '../dto/CreateRaceDto';

@Injectable()
export class RaceService {
  constructor(@InjectModel(Race.name) private raceModel: Model<Race>) {}

  async create(createRaceDto: CreateRaceDto): Promise<Race> {
    const createRace = new this.raceModel(createRaceDto);
    return createRace.save();
  }

  async findAll(): Promise<Race[]> {
    return this.raceModel.find().exec();
  }
}
