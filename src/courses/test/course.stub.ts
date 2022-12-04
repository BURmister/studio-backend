import { Course } from "../schema/courses.schema";

export const courseStub = (): Course => {
   return {
      id: '123',
      name: 'backend-developer',
      img: 'testingPath',
      description: 'some description',
      lasting: 'long',
      price: 'infinity',
      curator: 'someone'
   }
}