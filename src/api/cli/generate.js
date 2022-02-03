'use strict';

const chalk = require('chalk');
const {MOCKS_FILE_NAME, MAX_ID_LENGTH} = require('../../constants');
const {generateMocks} = require('../../mock-generator/index.js');
const DEFAULT_COUNT_OF_PUBLICATIONS = 1;
const MAX_COUNT_OF_PUBLICATIONS = 1000;

module.exports = {
  name: '--generate',
  async run(params) {
    const publicationNumber = ensurePublicationNumberParam(params);
    await generateMocks(publicationNumber, MAX_ID_LENGTH, MOCKS_FILE_NAME);
  }
};

function ensurePublicationNumberParam(param) {
  const count = Number(param[0]) || DEFAULT_COUNT_OF_PUBLICATIONS;
  if (count > MAX_COUNT_OF_PUBLICATIONS) {
    throw new Error(chalk.red(`Не больше ${MAX_COUNT_OF_PUBLICATIONS} объявлений`));
  }
  return count;
}
