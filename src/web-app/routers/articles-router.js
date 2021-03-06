'use strict';

const {Router} = require(`express`);
const articlesRouter = new Router();

articlesRouter.get(`/`, (req, res) => res.send(`/articles`));
articlesRouter.get(`/category/:id`, (req, res) => res.render(`articles-by-category`));
articlesRouter.get(`/add`, (req, res) => res.send(`/articles/add`));
articlesRouter.get(`/edit/:id`, (req, res) => res.send(`/articles/edit/:id`));
articlesRouter.get(`/:id`, (req, res) => res.render(`post`));

module.exports = articlesRouter;
