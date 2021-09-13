'use strict';

const {Cli} = require(`./cli`);

const args = process.argv.slice(2);
const command = args[0];
const params = args.slice(1);

Cli[command].run(params);
process.exit(0);
