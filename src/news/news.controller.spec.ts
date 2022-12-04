import { Test, TestingModule } from '@nestjs/testing';
import { NewsController } from './news.controller';
import { NewsService } from './news.service'
import { News } from './schema/news.schema'
import { newsStub } from './test/news.stub'

jest.mock('./news.service')

describe('NewsController', () => {
  let newsController: NewsController;
  let newsService: NewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [NewsController],
      providers: [NewsService]
    }).compile();

    newsController = module.get<NewsController>(NewsController);
    newsService = module.get<NewsService>(NewsService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(newsController).toBeDefined();
  });

  describe('getOneNews', () => {
    describe('when getOneNews is called', () => {
      let news: News;

      beforeEach(async () => {
        news = await newsController.getOne(newsStub().id)
      })

      test('then it should call newsService', () => {
        expect(newsService.getOne).toBeCalledWith(newsStub().id)
      })

      test('then it should return a new', () => {
        expect(news).toEqual(newsStub())
      })
    })  
  })

  describe('getNews', () => {
    describe('when getNews is called', () => {
      let news: News[];

      beforeEach(async () => {
        news = await newsController.getNews()
      })

      test('then it should call newsService', () => {
        expect(newsService.getAll).toHaveBeenCalled()
      })

      test('then it should return news', () => {
        expect(news).toEqual([newsStub()])
      })
    })
  })
});
