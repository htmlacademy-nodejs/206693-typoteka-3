'use strict';
const chalk = require(`chalk`);
const {getRandomInt, getRandomDate, readFile, writeFile} = require('../../utils');

const FILE_ANNOUNCE_PATH = `./data/announce.txt`;
const FILE_TITLES_PATH = `./data/titles.txt`;
const FILE_CATEGORIES_PATH = `./data/categories.txt`;
const DEFAULT_COUNT = 1;
const MAX_COUNT = 1000;
const FILE_NAME = `mocks.json`;

module.exports = {
  name: `--generate`,
  async run(params) {
    const count = Number(params[0]) || DEFAULT_COUNT;
    if (count > MAX_COUNT) {
      throw new Error(chalk.red(`Не больше ${MAX_COUNT} объявлений`));
    }

    const publications = await generatePublications(count);
    const output = formatOutput(publications);

    await writeFile(FILE_NAME, output);
  }
};

async function generatePublications(count) {
  const publications = [];
  const titleList = parseData(await readFile(FILE_TITLES_PATH));
  const announceList = parseData(await readFile(FILE_ANNOUNCE_PATH));
  const categoryList = parseData(await readFile(FILE_CATEGORIES_PATH));

  for (let i = 0; i < count; i++) {
    const title = titleList[getRandomInt(0, titleList.length - 1)];
    const announce = announceList[getRandomInt(0, announceList.length - 1)];
    const category = categoryList[getRandomInt(0, categoryList.length - 1)];

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

function parseData(source) {
  return source.trim().split(`\n`);
}

function formatOutput(publications) {
  return JSON.stringify(publications, null, 4);
}
