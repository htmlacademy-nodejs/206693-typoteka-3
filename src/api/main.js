import chalk from 'chalk';
import express from 'express';
import {MocksProvider} from './mocks/MocksProvider.js';
import {CategoryService} from './category/CategoryService.js';
import {ArticleService} from './article/ArticleService.js';
import {SearchService} from './search/SearchService.js';
import {createCategoryRouter} from './category/category-router.js';
import {createArticleRouter} from './article/article-router.js';
import {createSearchRouter} from './search/search-router.js';

export async function runApi(port, mockFileName, maxIdLength) {
  const app = express();
  const mocksProvider = new MocksProvider(mockFileName);
  const mockData = await mocksProvider.getMockData();
  const categoryService = new CategoryService(mockData);
  const articleService = new ArticleService(mockData, maxIdLength);
  const searchService = new SearchService(mockData);

  app.use(express.json());
  createCategoryRouter(app, categoryService);
  createArticleRouter(app, articleService);
  createSearchRouter(app, searchService);

  app.listen(port, (error) => {
    if (error) {
      console.error(chalk.red(error));
    } else {
      console.info(chalk.green(`Server is listening on port: ${port}`));
    }
  });
}
