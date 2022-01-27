'use strict';
const {Router} = require('express');
const {HTTP_CODE} = require('../../constants');
const validateArticle = require('../middlewares/validate-article');

function createArticleRouter(app, articleService) {
  const articlesRouter = new Router();

  articlesRouter.get(`/`, (req, res) => {
    const articles = articleService.findAll();
    res.status(HTTP_CODE.OK);
    res.json(articles);
  });

  articlesRouter.get(`/:articleId`, (req, res) => {
    const articleId = req.params.articleId;
    const article = articleService.findById(articleId);
    res.status(HTTP_CODE.OK);
    res.json(article);
  });

  articlesRouter.get(`/:articleId/comments`, (req, res) => {
    const articleId = req.params.articleId;
    const comments = articleService.findCommentsFor(articleId);
    res.status(HTTP_CODE.OK);
    res.json(comments);
  });

  articlesRouter.post(`/`, validateArticle, (req, res) => {
    articleService.create(req.body);
    res.status(HTTP_CODE.OK);
    res.end();
  })

  articlesRouter.put(`/:articleId`, validateArticle, (req, res) => {
    const articleId = req.params.articleId;
    const articleData = req.body;
    articleService.update(articleId, articleData);
    res.status(HTTP_CODE.OK);
    res.end();
  });

  articlesRouter.delete(`/:articleId`, (req, res) => {
    const articleId = req.params.articleId;
    articleService.delete(articleId);
    res.status(HTTP_CODE.OK);
    res.end();
  });

  app.use(`/articles`, articlesRouter);
}

module.exports = createArticleRouter;
