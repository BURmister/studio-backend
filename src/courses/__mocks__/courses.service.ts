import { courseStub } from '../test/course.stub'

export const CoursesService = jest.fn().mockReturnValue({
   getAll: jest.fn().mockReturnValue([courseStub()]),
   getById: jest.fn().mockReturnValue(courseStub())
})