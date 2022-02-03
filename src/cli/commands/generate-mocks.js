'use strict';

import chalk from 'chalk';
import {generateMocks} from '../../mock-generator/index.js';
import {MOCKS_FILE_NAME, MAX_ID_LENGTH} from '../../constants.js';

const DEFAULT_COUNT_OF_PUBLICATIONS = 1;
const MAX_COUNT_OF_PUBLICATIONS = 1000;

export const generateMocksCommand = {
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
