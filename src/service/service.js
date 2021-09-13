'use strict';

const {Cli} = require(`./cli`);

const args = process.argv.slice(2);
const command = args[0];

Cli[command].run();
process.exit(0);
