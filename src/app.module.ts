import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RaceModule } from './schemas/race/race.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://vlad20popa:gejjmy37y4wn@cluster0.pbydlzz.mongodb.net/treasure-hunt?retryWrites=true&w=majority',
    ),
    RaceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
