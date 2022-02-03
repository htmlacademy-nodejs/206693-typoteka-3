import {constants as HTTP_CODES} from 'http2';

export function validateComment(req, res, next) {
  const comment = req.body;
  if (validateCommentText(comment)) {
    next();
  } else {
    res.status(HTTP_CODES.HTTP_STATUS_BAD_REQUEST);
    res.end();
  }
}

function validateCommentText(comment) {
  return typeof comment.text === 'string' && comment.text.length > 0;
}
