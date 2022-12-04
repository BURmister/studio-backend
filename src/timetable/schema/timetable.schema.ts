import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type TimetableDocument = HydratedDocument<Timetable>

@Schema()
export class Timetable { 
   @Prop()
   id: string

   @Prop()
   date: string

   @Prop()
   courses: {course_id: string, time: string}[]
}

export const TimetableSchema = SchemaFactory.createForClass(Timetable);
