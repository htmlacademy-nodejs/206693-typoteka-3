'use strict';

const {HTTP_CODE} = require('../../constants');

function validateArticle(req, res, next) {
  const article = req.body;

  if (validateTitle(article) && validateAnnounce(article) && validateFullText(article) && validateCategory(article)) {
    next();
  } else {
    res.status(HTTP_CODE.BAD_REQUEST);
    res.end();
  }
}

function validateTitle(article) {
  return typeof article.title === 'string' && article.title.length >= 30 && article.title.length <= 250;
}

function validateAnnounce(article) {
  return !!article.announce;
}

function validateFullText(article) {
  return !!article.fullText;
}

function validateCategory(article) {
  return !!article.category;
}


module.exports = validateArticle;
