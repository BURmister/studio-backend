import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type CourseDocument = HydratedDocument<Course>

@Schema()
export class Course { 
   @Prop()
   id: string

   @Prop()
   name: string
   
   @Prop()
   img: string
   
   @Prop()
   description: string

   @Prop()
   lasting: string

   @Prop()
   price: string

   @Prop()
   curator: string
}

export const CourseSchema = SchemaFactory.createForClass(Course);
