'use strict';

const {HTTP_CODE} = require("../../constants");

function validateComment(req, res, next) {
  const comment = req.body;
  if (!validateCommentText(comment)) {
    res.status(HTTP_CODE.BAD_REQUEST);
    res.end();
  } else {
    next();
  }
}

function validateCommentText(comment) {
  return typeof comment.text === 'string' && comment.text.length > 0;
}

module.exports = validateComment;
