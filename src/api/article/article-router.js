import {constants as HTTP_CODES} from 'http2';
import {Router} from 'express';
import {validateArticle} from './validate-article.js';
import {validateComment} from './validate-comment.js';
import {ArticleNotFoundException} from './exceptions/ArticleNotFoundException';

export function createArticleRouter(app, articleService) {
  const articlesRouter = new Router();

  articlesRouter.get(`/`, (req, res) => {
    const articles = articleService.findAll();
    res.status(HTTP_CODES.HTTP_STATUS_OK);
    res.json(articles);
  });

  articlesRouter.get(`/:articleId`, (req, res) => {
    const articleId = req.params.articleId;
    const article = articleService.findById(articleId);
    if (article) {
      res.status(HTTP_CODES.HTTP_STATUS_OK);
      res.json(article);
    } else {
      res.status(HTTP_CODES.HTTP_STATUS_NOT_FOUND);
      res.end();
    }
  });

  articlesRouter.get(`/:articleId/comments`, (req, res) => {
    const articleId = req.params.articleId;
    const comments = articleService.findCommentsByArticleId(articleId);
    res.status(HTTP_CODES.HTTP_STATUS_OK);
    res.json(comments);
  });

  articlesRouter.post(`/`, validateArticle, (req, res) => {
    articleService.create(req.body);
    res.status(HTTP_CODES.HTTP_STATUS_OK);
    res.end();
  })

  articlesRouter.put(`/:articleId`, validateArticle, (req, res) => {
    const articleId = req.params.articleId;
    const articleData = req.body;
    articleService.update(articleId, articleData);
    res.status(HTTP_CODES.HTTP_STATUS_OK);
    res.end();
  });

  articlesRouter.delete(`/:articleId`, (req, res) => {
    const articleId = req.params.articleId;
    articleService.delete(articleId);
    res.status(HTTP_CODES.HTTP_STATUS_OK);
    res.end();
  });

  articlesRouter.delete(`/:articleId/comments/:commentId`, (req, res) => {
    const articleId = req.params.articleId;
    const commentId = req.params.commentId;
    articleService.deleteCommentById(articleId, commentId);
    res.status(HTTP_CODES.HTTP_STATUS_OK);
    res.end();
  });

  articlesRouter.post(`/:articleId/comments`, validateComment, (req, res) => {
    const articleId = req.params.articleId;
    const commentData = req.body;
    articleService.addComment(articleId, commentData);
    res.status(HTTP_CODES.HTTP_STATUS_OK);
    res.end();
  })

  app.use(`/articles`, articlesRouter);
}
