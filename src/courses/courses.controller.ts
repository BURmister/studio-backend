import { Controller, Get, Param, Post, HttpCode, Header, Body, HttpStatus } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCoursesDto } from './courses.dto'

@Controller('courses')
export class CoursesController {

   constructor (private readonly productService: CoursesService) {}

   @Get()
   getCourses() {
      return this.productService.getAll()
   }

   @Get(':id')
   getOneCourse(@Param('id') id: string) {
      return this.productService.getById(id)
   }
}
