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
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  getNews() {
    return this.newsService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.newsService.getOne(id);
  }
}
