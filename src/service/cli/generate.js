'use strict';

const chalk = require(`chalk`);
const fsPromises = require(`fs`).promises;

const FILE_ANNOUNCE_PATH = `./data/sentences.txt`;
const FILE_TITLES_PATH = `./data/titles.txt`;
const FILE_CATEGORIES_PATH = `./data/categories.txt`;

const DEFAULT_COUNT = 1;
const MAX_COUNT = 1000;
const FILE_NAME = `mocks.json`;

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomDate = () => {
  const toDate = new Date();
  const fromDate = new Date().setMonth(toDate.getMonth() - 3);
  const randomDate = new Date(getRandomInt(fromDate, toDate)).toISOString();

  return `${randomDate.substr(0, 10)} ${randomDate.substr(11, 8)}`
}

const generatePublications = (count, titles, categories, announce) => {
  const publications = [];

  for (let i = 0; i < count; i++) {
    const title = titles[getRandomInt(0, titles.length - 1)];
    const announce = announce[getRandomInt(0, announce.length - 1)];
    const category = categories[getRandomInt(0, categories.length - 1)];

    publications.push({
      title: title,
      announce: announce,
      fullText: title + ' ' + announce,
      createdDate: getRandomDate(),
      category: category,
    });
  }

  return publications;
}

const readContent = async (filePath) => {
  try {
    const content = await fsPromises.readFile(filePath, `utf8`);
    return content.trim().split(`\n`);
  } catch (err) {
    console.error(chalk.red(err));
    return [];
  }
};

module.exports = {
  name: `--generate`,
  async run(params) {
    const count = Number(params[0]) || DEFAULT_COUNT;
    if (count > MAX_COUNT) {
      throw new Error(chalk.red(`Не больше ${MAX_COUNT} объявлений`));
    }
    const json = JSON.stringify(generatePublications(count), null, 4);
    try {
      await fsPromises.writeFile(FILE_NAME, json);
      console.log(chalk.green(`Operation success. File created.`));
    } catch (err) {
      console.error(chalk.red(`Can't write data to file...`));
    }
  }
};
