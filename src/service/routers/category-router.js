'use strict';
const {Router} = require('express');
const {HTTP_CODE} = require('../../constants');

function createCategoryRouter(app, categoryService) {
  const categoriesRouter = new Router();

  categoriesRouter.get(`/`, async (req, res) => {
    const categories = await categoryService.findAll();
    res.status(HTTP_CODE.OK);
    res.json(categories);
  });

  app.use(`/categories`, categoriesRouter);
}

module.exports = createCategoryRouter;
