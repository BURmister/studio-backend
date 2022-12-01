import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type TimetableDocument = HydratedDocument<Timetable>

@Schema()
export class Timetable { 
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

export const TimetableSchema = SchemaFactory.createForClass(Timetable);
