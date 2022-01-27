const {Router} = require("express");
const {HTTP_CODE} = require("../../constants");

function createSearchRouter(app, articleService) {
  const searchRouter = new Router();

  searchRouter.get(`/`, (req, res) => {
    const searchQuery = req.query.query;
    const result = articleService.searchFor(searchQuery);
    res.status(HTTP_CODE.OK);
    res.json(result);
  });

  app.use(`/search`, searchRouter);
}

module.exports = createSearchRouter;
