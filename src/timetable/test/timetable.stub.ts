import { Timetable } from "../schema/timetable.schema";

export const timetableStub = (): Timetable => {
   return {
      id: '123',
      date: '25 april',
      courses: [
         {course_id: '12345', time: 'any time'},
         {course_id: '12345', time: 'any time'},
         {course_id: '12345', time: 'any time'}
      ]
   }
}