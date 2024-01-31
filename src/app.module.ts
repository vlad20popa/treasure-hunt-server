import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RaceController } from './race/race.controller';

@Module({
  imports: [],
  controllers: [AppController, RaceController],
  providers: [AppService],
})
export class AppModule {}
