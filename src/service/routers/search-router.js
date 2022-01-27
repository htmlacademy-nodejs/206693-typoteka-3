const {Router} = require("express");
const {HTTP_CODE} = require("../../constants");

function createSearchRouter(app, articleService) {
  const searchRouter = new Router();

  searchRouter.get(`/`, (req, res) => {
    const searchQuery = req.query.query;
    res.status(HTTP_CODE.OK);
    res.end();
  });

  app.use(`/search`, searchRouter);
}

module.exports = createSearchRouter;
