import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { News, NewsDocument } from './schema/news.schema';

@Injectable()
export class NewsService {
  constructor(
    @InjectModel(News.name)
    private timetableModel: Model<NewsDocument>,
  ) {}

  async getAll(): Promise<News[]> {
    return this.timetableModel.find().exec();
  }

  async getOne(id: string): Promise<News> {
    return this.timetableModel.findById(id);
  }
}
