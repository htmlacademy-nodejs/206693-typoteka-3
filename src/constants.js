'use strict';

const HTTP_CODE = {
  OK: 200,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401,
};
const PUBLIC_DIR = 'public';
const DEFAULT_PORT = 8080;

const MOCKS_FILE_NAME = `mocks.json`;

const FILE_ANNOUNCE_PATH = `./data/announce.txt`;
const FILE_TITLES_PATH = `./data/titles.txt`;
const FILE_CATEGORIES_PATH = `./data/categories.txt`;

const DEFAULT_COUNT_OF_PUBLICATIONS = 1;
const MAX_COUNT_OF_PUBLICATIONS = 1000;

const TEMPLATE_HELP_COMMAND = `
Программа запускает http-сервер и формирует файл с данными для API.

Гайд:
service.js <command>
Команды:
--version: выводит номер версии
--help: печатает этот текст
--generate <count> формирует файл mocks.json
`;

module.exports = {
  HTTP_CODE,
  PUBLIC_DIR,
  DEFAULT_PORT,
  MOCKS_FILE_NAME,
  FILE_ANNOUNCE_PATH,
  FILE_TITLES_PATH,
  FILE_CATEGORIES_PATH,
  DEFAULT_COUNT_OF_PUBLICATIONS,
  MAX_COUNT_OF_PUBLICATIONS,
  TEMPLATE_HELP_COMMAND,
};
