'use strict';

const chalk = require(`chalk`);
const {Cli} = require(`./cli`);

const args = process.argv.slice(2);
const command = args[0];
const params = args.slice(1);

if (!command) {
  console.log(chalk.green(`No command passed`));
  Cli[`--help`].run();
  process.exit(1);
}

if (!Cli[command]) {
  console.log(chalk.green(`Unknown command: ${command}`));
  Cli[`--help`].run();
  process.exit(1);
}

Cli[command].run(params);
