'use strict';

const {Router} = require('express');
const {HTTP_CODE} = require('../../../constants');

function createSearchRouter(app, searchService) {
  const searchRouter = new Router();

  searchRouter.get(`/`, (req, res) => {
    const searchQuery = req.query.query;
    const result = searchService.searchFor(searchQuery);
    res.status(HTTP_CODE.OK);
    res.json(result);
  });

  app.use(`/search`, searchRouter);
}

module.exports = createSearchRouter;
