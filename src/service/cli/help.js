'use strict';

const chalk = require(`chalk`);
const {templateHelpCommand} = require("../../constants");

module.exports = {
  name: `--help`,
  run() {
    console.log(chalk.gray(templateHelpCommand));
  }
};
