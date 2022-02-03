import {versionCommand} from './commands/version.js';
import {helpCommand} from './commands/help.js';
import {generateMocksCommand} from './commands/generate-mocks.js';
import {runApiCommand} from './commands/run-api.js';

export const commandMap = {
  [versionCommand.name]: versionCommand,
  [helpCommand.name]: helpCommand,
  [generateMocksCommand.name]: generateMocksCommand,
  [runApiCommand.name]: runApiCommand,
};
