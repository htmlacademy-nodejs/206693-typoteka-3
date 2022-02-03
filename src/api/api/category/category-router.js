'use strict';

import {Router} from 'express';
import {HTTP_CODE} from '../../../constants.js';

export function createCategoryRouter(app, categoryService) {
  const categoriesRouter = new Router();

  categoriesRouter.get(`/`, async (req, res) => {
    const categories = await categoryService.findAll();
    res.status(HTTP_CODE.OK);
    res.json(categories);
  });

  app.use(`/categories`, categoriesRouter);
}
