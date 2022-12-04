import { newsStub } from '../test/news.stub'

export const NewsService = jest.fn().mockReturnValue({
   getAll: jest.fn().mockReturnValue([newsStub()]),
   getOne: jest.fn().mockReturnValue(newsStub())
})