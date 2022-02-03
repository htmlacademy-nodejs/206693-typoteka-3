'use strict';

const express = require('express');
const chalk = require('chalk');
const {DEFAULT_PORT} = require('../../constants');
const MocksProvider = require('../lib/MocksProvider');
const {MOCKS_FILE_NAME} = require('../../constants');
const CategoryService = require('../api/category/CategoryService');
const ArticleService = require('../api/article/ArticleService');
const SearchService = require('../api/search/SearchService');
const createArticleRouter = require('../api/article/article-router');
const createCategoryRouter = require('../api/category/category-router');
const createSearchRouter = require('../api/search/search-router');

module.exports = {
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
