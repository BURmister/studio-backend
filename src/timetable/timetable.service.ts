import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Timetable, TimetableDocument } from './schema/timetable.schema';

@Injectable()
export class TimetableService {
  constructor(
    @InjectModel(Timetable.name) private timetableModel: Model<TimetableDocument>,
  ) {}

  async getAll(): Promise<Timetable[]> {
    return this.timetableModel.find().exec();
  }

  async getOne(id: string): Promise<Timetable> {
    return this.timetableModel.findOne({date: id});
  }

}
