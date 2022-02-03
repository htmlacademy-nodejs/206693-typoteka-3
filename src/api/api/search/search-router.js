'use strict';

import {Router} from 'express';
import {HTTP_CODE} from '../../../constants.js';

export function createSearchRouter(app, searchService) {
  const searchRouter = new Router();

  searchRouter.get(`/`, (req, res) => {
    const searchQuery = req.query.query;
    const result = searchService.searchFor(searchQuery);
    res.status(HTTP_CODE.OK);
    res.json(result);
  });

  app.use(`/search`, searchRouter);
}
