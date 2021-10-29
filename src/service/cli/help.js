'use strict';
const chalk = require(`chalk`);
const {TEMPLATE_HELP_COMMAND} = require("../../constants");

module.exports = {
  name: `--help`,
  run() {
    console.log(chalk.gray(TEMPLATE_HELP_COMMAND));
  }
};
