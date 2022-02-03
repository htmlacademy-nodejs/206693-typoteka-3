import {Router} from 'express';
import {constants as HTTP_CODES} from 'http2';

export function createSearchRouter(app, searchService) {
  const searchRouter = new Router();

  searchRouter.get(`/`, (req, res) => {
    const searchQuery = req.query.query;
    const result = searchService.searchFor(searchQuery);
    res.status(HTTP_CODES.HTTP_STATUS_OK);
    res.json(result);
  });

  app.use(`/search`, searchRouter);
}
