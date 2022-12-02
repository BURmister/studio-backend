import {
  Controller,
  Get,
  Param,
  Post,
  HttpCode,
  Header,
  Body,
  HttpStatus,
} from '@nestjs/common';
import { TimetableService } from './timetable.service';
import { CreateTimetableDto } from './timetable.dto';

@Controller('timetable')
export class TimetableController {
  constructor(private readonly timetableService: TimetableService) {}

  @Get()
  getTimetable() {
    return this.timetableService.getAll();
  }

  @Get(':id')
  getOneTimetable(@Param('id') id: string) {
    return this.timetableService.getOne(id)
  }
}
