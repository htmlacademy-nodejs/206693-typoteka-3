'use strict';

import {Router} from 'express';
import {HTTP_CODE} from '../../../constants';
import {validateArticle} from './validate-article';
import {validateComment} from './validate-comment';

export function createArticleRouter(app, articleService) {
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
    const comments = articleService.findCommentsByArticleId(articleId);
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

  articlesRouter.delete(`/:articleId/comments/:commentId`, (req, res) => {
    const articleId = req.params.articleId;
    const commentId = req.params.commentId;
    articleService.deleteCommentById(articleId, commentId);
    res.status(HTTP_CODE.OK);
    res.end();
  });

  articlesRouter.post(`/:articleId/comments`, validateComment, (req, res) => {
    const articleId = req.params.articleId;
    const commentData = req.body;
    articleService.addComment(articleId, commentData);
    res.status(HTTP_CODE.OK);
    res.end();
  })

  app.use(`/articles`, articlesRouter);
}
