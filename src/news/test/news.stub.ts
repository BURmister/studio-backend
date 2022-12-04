import { News } from "../schema/news.schema";

export const newsStub = (): News => {
   return {
      id: '123',
      title: 'it is perfect news',
      date: '25 april',
      img: 'testingPath'
   }
}