import {DEFAULT_PORT, MAX_ID_LENGTH, MOCKS_FILE_NAME} from '../constants.js';
import {runApi} from '../../api/main.js';

export const runApiCommand = {
  name: '--server',
  async run(args) {
    const port = Number(args[0]) || DEFAULT_PORT;
    await runApi(port, MOCKS_FILE_NAME, MAX_ID_LENGTH);
  }
};
