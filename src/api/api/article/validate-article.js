'use strict';

import {HTTP_CODE} from '../../../constants';

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 250;

export function validateArticle(req, res, next) {
  if (isArticleValid(req.body)) {
    next();
  } else {
    res.status(HTTP_CODE.BAD_REQUEST);
    res.end();
  }
}

function isArticleValid(article) {
  return isTitleValid(article) && isAnnounceValid(article) && isFullTextValid(article) && isCategoryValid(article);
}

function isTitleValid(article) {
  const title = article.title;
  const isString = typeof title === 'string';
  const hasAcceptableLength = title.length >= MIN_TITLE_LENGTH && title.length <= MAX_TITLE_LENGTH;
  return isString && hasAcceptableLength;
}

function isAnnounceValid(article) {
  return !!article.announce;
}

function isFullTextValid(article) {
  return !!article.fullText;
}

function isCategoryValid(article) {
  return !!article.category;
}
