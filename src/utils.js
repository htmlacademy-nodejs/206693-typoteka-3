'use strict';
const chalk = require('chalk');
const fs = require('fs').promises;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDate() {
  const toDate = new Date();
  const fromDate = new Date().setMonth(toDate.getMonth() - 3);
  const randomDate = new Date(getRandomInt(fromDate, toDate)).toISOString();

  return `${randomDate.substr(0, 10)} ${randomDate.substr(11, 8)}`;
}

async function readFile(path) {
  try {
    return await fs.readFile(path, 'utf8');
  } catch (err) {
    console.error(chalk.red(err));
    return ``; //TODO ???
  }
}

async function writeFile(path, content) {
  try {
    await fs.writeFile(path, content);
    console.log(chalk.green('Operation success. File created.'));
  } catch (err) {
    console.error(chalk.red('Can`t write data to file...'));
  }
}

function randomlySwapAllElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    const randomPosition = getRandomInt(0, arr.length - 1);
    const tempArr = arr[i];
    arr[i] = arr[randomPosition];
    arr[randomPosition] = tempArr;
  }

  return arr;
}

module.exports = {
  getRandomInt,
  getRandomDate,
  readFile,
  writeFile,
  randomlySwapAllElements,
};


