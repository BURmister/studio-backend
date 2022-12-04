import { Test, TestingModule } from '@nestjs/testing';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service'
import { Course } from './schema/courses.schema'
import { courseStub } from './test/course.stub'

jest.mock('./courses.service')

describe('CoursesController', () => {
  let coursesController: CoursesController;
  let coursesService: CoursesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [CoursesController],
      providers: [CoursesService]
    }).compile();

    coursesController = module.get<CoursesController>(CoursesController);
    coursesService = module.get<CoursesService>(CoursesService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(coursesController).toBeDefined();
  });

  describe('getOneCourse', () => {
    describe('when getOneCourse is called', () => {
      let course: Course;

      beforeEach(async () => {
        course = await coursesController.getOneCourse(courseStub().id)
      })

      test('then it should call courseService', () => {
        expect(coursesService.getById).toBeCalledWith(courseStub().id)
      })

      test('then it should return a course', () => {
        expect(course).toEqual(courseStub())
      })
    })  
  })

  describe('getCourses', () => {
    describe('when getCourses is called', () => {
      let courses: Course[];

      beforeEach(async () => {
        courses = await coursesController.getCourses()
      })

      test('then it should call coursesService', () => {
        expect(coursesService.getAll).toHaveBeenCalled()
      })

      test('then it should return courses', () => {
        expect(courses).toEqual([courseStub()])
      })
    })
  })
});
