import { timetableStub } from '../test/timetable.stub'

export const TimetableService = jest.fn().mockReturnValue({
   getAll: jest.fn().mockReturnValue([timetableStub()]),
   getOne: jest.fn().mockReturnValue(timetableStub())
})