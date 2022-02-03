'use strict';

import {HTTP_CODE} from '../../../constants';

export function validateComment(req, res, next) {
  const comment = req.body;
  if (validateCommentText(comment)) {
    next();
  } else {
    res.status(HTTP_CODE.BAD_REQUEST);
    res.end();
  }
}

function validateCommentText(comment) {
  return typeof comment.text === 'string' && comment.text.length > 0;
}
