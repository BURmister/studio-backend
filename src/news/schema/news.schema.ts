import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type NewsDocument = HydratedDocument<News>

@Schema()
export class News { 
   @Prop()
   id: string

   @Prop()
   title: string

   @Prop()
   date: string

   @Prop()
   img: string
}

export const NewsSchema = SchemaFactory.createForClass(News);
