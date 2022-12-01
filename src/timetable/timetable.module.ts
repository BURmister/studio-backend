import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TimetableController } from './timetable.controller';
import { TimetableService } from './timetable.service';
import { Timetable, TimetableSchema } from './schema/timetable.schema';

@Module({
  providers: [TimetableService],
  controllers: [TimetableController],
  imports: [
    MongooseModule.forFeature([
      { name: Timetable.name, schema: TimetableSchema },
    ]),
  ],
})
export class TimetableModule {}
