'use strict';

const {validateArticle} = require(`./validate-article`);
const {ArticlesService} = require(`./articleService`);
const {articleRouter} = require(`./article-router`);

module.exports = {
  validateArticle,
  ArticlesService,
  articleRouter,
};
