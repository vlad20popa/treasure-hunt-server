import { Controller, Get } from '@nestjs/common';
import { RaceService } from '../../services/RaceService';
import { get } from 'mongoose';
import { Race } from '../../schemas/race/race.schema';
import { CreateRaceDto } from '../../dto/CreateRaceDto';

@Controller('race')
export class RaceController {
  private readonly raceService: RaceService;

  constructor(raceService: RaceService) {
    this.raceService = raceService;
  }

  @Get()
  findAl(): Promise<Race[]> {
    return this.raceService.findAll();
  }
}
