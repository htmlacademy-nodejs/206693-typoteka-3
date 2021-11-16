'use strict';
const {Router} = require(`express`);
const {readFile} = require(`../../../utils`);
const {MOCKS_FILE_NAME} = require(`../../../constants`);
const postsRoutes = new Router();

postsRoutes.get(`/`, async (req, res) => {
  try {
    const content = await readFile(MOCKS_FILE_NAME);
    const mocks = JSON.parse(content);
    res.json(mocks);
  } catch (err) {
    res.send([]);
  }
});

module.exports = postsRoutes;
