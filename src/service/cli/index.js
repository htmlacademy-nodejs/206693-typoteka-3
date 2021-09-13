'use strict';

const version = require(`./version.js`);
const help = require(`./help.js`);

module.exports.Cli = {
  [version.name]: version,
  [help.name]: help,
};
