import {Router} from 'express';
import {constants as HTTP_CODES} from 'http2';

export function createCategoryRouter(app, categoryService) {
  const categoriesRouter = new Router();

  categoriesRouter.get(`/`, async (req, res) => {
    const categories = await categoryService.findAll();
    res.status(HTTP_CODES.HTTP_STATUS_OK);
    res.json(categories);
  });

  app.use(`/categories`, categoriesRouter);
}
