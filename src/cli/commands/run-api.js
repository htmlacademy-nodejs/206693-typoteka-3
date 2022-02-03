'use strict';

import express from 'express';
import chalk from 'chalk';

import {MocksProvider} from '../../api/mocks/MocksProvider.js';
import {CategoryService} from '../../api/category/CategoryService.js';
import {ArticleService} from '../../api/article/ArticleService.js';
import {SearchService} from '../../api/search/SearchService.js';

import {createArticleRouter} from '../../api/article/article-router.js';
import {createCategoryRouter} from '../../api/category/category-router.js';
import {createSearchRouter} from '../../api/search/search-router.js';

import {DEFAULT_PORT, MOCKS_FILE_NAME} from '../../constants.js';

export const runApiCommand = {
  name: '--server',
  async run(portArg) {
    //TODO вынести все в одну функцию
    const port = ensurePort(portArg);
    const app = express();
    const mocksProvider = new MocksProvider(MOCKS_FILE_NAME);
    const mockData = await mocksProvider.getMockData();
    const categoryService = new CategoryService(mockData);
    const articleService = new ArticleService(mockData);
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
};

function ensurePort(port) {
  return Number(port[0]) || DEFAULT_PORT;
}
