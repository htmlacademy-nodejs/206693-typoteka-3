'use strict';
const MOCKS_FILE_NAME = `mocks.json`;
const DEFAULT_PORT = 8080;
const HTTP_CODE = {
  OK: 200,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401,
};

module.exports = {
  MOCKS_FILE_NAME,
  DEFAULT_PORT,
  HTTP_CODE,
};
