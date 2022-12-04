import { Test, TestingModule } from '@nestjs/testing';
import { TimetableController } from './timetable.controller';
import { TimetableService } from './timetable.service'
import { Timetable } from './schema/timetable.schema'
import { timetableStub } from './test/timetable.stub'

jest.mock('./timetable.service')

describe('TimetableController', () => {
  let timetableController: TimetableController;
  let timetableService: TimetableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [TimetableController],
      providers: [TimetableService]
    }).compile();

    timetableController = module.get<TimetableController>(TimetableController);
    timetableService = module.get<TimetableService>(TimetableService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(timetableController).toBeDefined();
  });

  describe('getOneTimetable', () => {
    describe('when getOneTimetable is called', () => {
      let timetable: Timetable;

      beforeEach(async () => {
        timetable = await timetableController.getOneTimetable(timetableStub().id)
      })

      test('then it should call timetableService', () => {
        expect(timetableService.getOne).toBeCalledWith(timetableStub().id)
      })

      test('then it should return a new', () => {
        expect(timetable).toEqual(timetableStub())
      })
    })  
  })

  describe('getTimetable', () => {
    describe('when getTimetable is called', () => {
      let timetable: Timetable[];

      beforeEach(async () => {
        timetable = await timetableController.getTimetable()
      })

      test('then it should call timetableService', () => {
        expect(timetableService.getAll).toHaveBeenCalled()
      })

      test('then it should return timetable', () => {
        expect(timetable).toEqual([timetableStub()])
      })
    })
  })
});
