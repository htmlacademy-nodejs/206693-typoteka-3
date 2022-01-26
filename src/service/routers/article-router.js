'use strict';
const {Router} = require(`express`);
const {HTTP_CODE} = require("../../constants");

function createArticleRouter(app, articleService) {
  const articlesRouter = new Router();

  articlesRouter.get(`/`, async (req, res) => {
    const articles = await articleService.findAll();
    res.status(HTTP_CODE.OK);
    res.json(articles);
  });

  articlesRouter.get(`/:articleId`, async (req, res) => {
    const articleId = req.params.articleId;
    const article = await articleService.findById(articleId);
    res.status(HTTP_CODE.OK);
    res.json(article);
  });

  articlesRouter.get(`/:articleId/comments`, async (req, res) => {
    const articleId = req.params.articleId;
    const comments = await articleService.findCommentsFor(articleId);
    res.status(HTTP_CODE.OK);
    res.json(comments);
  });

  app.use(`/articles`, articlesRouter);
}

module.exports = createArticleRouter;
