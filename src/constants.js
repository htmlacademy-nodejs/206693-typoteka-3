'use strict';
module.exports.HTTP_CODE = {
  OK: 200,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401,
};

module.exports.DEFAULT_PORT = 3000;
module.exports.MOCKS_FILE_NAME = `mocks.json`;
module.exports.TEMPLATE_HELP_COMMAND = `
Программа запускает http-сервер и формирует файл с данными для API.

Гайд:
service.js <command>
Команды:
--version: выводит номер версии
--help: печатает этот текст
--generate <count> формирует файл mocks.json
`;
