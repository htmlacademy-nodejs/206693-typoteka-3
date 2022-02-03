'use strict';

import {versionCommand} from './version.js';
import {helpCommand} from './help.js';
import {generateMocksCommand} from './generate.js';
import {runServerCommand} from './server.js';

export const Cli = {
  [versionCommand.name]: versionCommand,
  [helpCommand.name]: helpCommand,
  [generateMocksCommand.name]: generateMocksCommand,
  [runServerCommand.name]: runServerCommand,
};
