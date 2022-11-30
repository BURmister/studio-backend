import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { Course, CourseSchema } from './schema/courses.schema'

@Module({
   providers: [CoursesService],
   controllers: [CoursesController],
   imports: [
      MongooseModule.forFeature([
         {name : Course.name, schema: CourseSchema}
      ])
   ]

})

export class CoursesModule {

}
