import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateCoursesDto } from './courses.dto'
import { Course, CourseDocument } from './schema/courses.schema'

@Injectable()
export class CoursesService {

   constructor(@InjectModel(Course.name) private courseModel: Model<CourseDocument>) {}

   async getAll(): Promise<Course[]> {
      return this.courseModel.find().exec()
   }

   async getById(id: string): Promise<Course> {
      return this.courseModel.findById(id)
   }
}