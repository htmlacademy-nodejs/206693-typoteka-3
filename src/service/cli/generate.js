'use strict';
const chalk = require(`chalk`);
const {nanoid} = require(`nanoid`);

const {
  getRandomInt,
  getRandomDate,
  readFile,
  writeFile,
  randomlySwapAllElements
} = require(`../../utils`);

const {MOCKS_FILE_NAME, MAX_ID_LENGTH} = require(`../../constants`);
const FILE_ANNOUNCE_PATH = `./data/announce.txt`;
const FILE_TITLES_PATH = `./data/titles.txt`;
const FILE_CATEGORIES_PATH = `./data/categories.txt`;
const FILE_COMMENTS_PATH = `./data/comments.txt`;

const DEFAULT_COUNT_OF_PUBLICATIONS = 1;
const MAX_COUNT_OF_PUBLICATIONS = 1000;
const MAX_COMMENTS = 4;

module.exports = {
  name: `--generate`,
  async run(params) {
    const publicationNumber = ensurePublicationNumberParam(params);
    const publications = await generatePublications(publicationNumber);
    await writeJsonFile(publications, MOCKS_FILE_NAME)
  }
};

async function generatePublications(count) {
  const publications = [];

  const [titleList, announceList, categoryList, commentList] = await Promise.all([
    readTitlesFromFile(),
    readAnnouncesFromFile(),
    readCategoriesFromFile(),
    readCommentsFromFile(),
  ]);

  for (let i = 0; i < count; i++) {
    const title = titleList[getRandomInt(0, titleList.length - 1)];
    const announce = announceList[getRandomInt(0, announceList.length - 1)];
    const category = categoryList[getRandomInt(0, categoryList.length - 1)];
    const comment = generateComments(getRandomInt(1, MAX_COMMENTS), commentList);

    publications.push({
      id: nanoid(MAX_ID_LENGTH),
      title: title,
      announce: announce,
      fullText: `${title} ${announce}`,
      createdDate: getRandomDate(),
      category: category,
      comment: comment,
    });
  }

  return publications;
}

function generateComments(count, comments) {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push({
      id: nanoid(MAX_ID_LENGTH),
      text: randomlySwapAllElements(comments)
        .slice(0, getRandomInt(1, 3))
        .join(` `),
    });
  }
  return result;
}

async function writeJsonFile(data, fileName){
  const str = JSON.stringify(data, null, 4);
  await writeFile(fileName, str);
}

function ensurePublicationNumberParam(param) {
  const count = Number(param[0]) || DEFAULT_COUNT_OF_PUBLICATIONS;
  if (count > MAX_COUNT_OF_PUBLICATIONS) {
    throw new Error(chalk.red(`Не больше ${MAX_COUNT_OF_PUBLICATIONS} объявлений`));
  }
  return count;
}

async function readTitlesFromFile() {
  const str = await readFile(FILE_TITLES_PATH);
  return parseData(str);
}

async function readAnnouncesFromFile() {
  const str = await readFile(FILE_ANNOUNCE_PATH);
  return parseData(str);
}

async function readCategoriesFromFile() {
  const str = await readFile(FILE_CATEGORIES_PATH);
  return parseData(str);
}

async function readCommentsFromFile() {
  const str = await readFile(FILE_COMMENTS_PATH);
  return parseData(str);
}

function parseData(source) {
  return source
    .split(`\n`)
    .map(line => line.trim())
    .filter(line => line.length !== 0);
}
