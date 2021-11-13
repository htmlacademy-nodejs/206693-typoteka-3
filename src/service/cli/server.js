'use strict';
const chalk = require(`chalk`);
const http = require(`http`);
const {DEFAULT_PORT, HTTP_CODE, MOCKS_FILE_NAME} = require(`../../constants`);
const {readFile} = require(`../../utils`);

module.exports = {
  name: `--server`,
  run(port) {
    createServer(validatePort(port));
  }
};

function validatePort(port) {
  return Number(port[0]) || DEFAULT_PORT;
}

function createServer(port) {
  const server = http.createServer(clientConnect);
  server.listen(port)
    .on(`listening`, () => {
      console.info(chalk.green(`Ожидаю соединений на ${port}`));
    })
    .on(`error`, ({message}) => {
      console.error(chalk.red(`Ошибка при создании сервера: ${message}`));
    });
}

async function clientConnect(request, response) {
  const notFoundMessageText = `Not found`;
  switch (request.url) {
    case `/`:
      try {
        const title = JSON.parse(await readFile(MOCKS_FILE_NAME))
          .map((post) => `<li>${post.title}</li>`).join(``);
        sendResponse(response, HTTP_CODE.OK, `<ul>${title}</ul>`);
      } catch (err) {
        sendResponse(response, HTTP_CODE.NOT_FOUND, notFoundMessageText);
      }
      break;
    default:
      sendResponse(response, HTTP_CODE.NOT_FOUND, notFoundMessageText);
      break;
  }
}

function sendResponse(response, statusCode, message) {
  const template = `
    <!Doctype html>
      <html lang="ru">
      <head>
        <title>With love from Node</title>
      </head>
      <body>${message}</body>
    </html>`.trim();

  response.writeHead(statusCode, {
    'Content-Type': `text/html; charset=UTF-8`,
  });

  response.end(template);
}

