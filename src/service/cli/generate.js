'use strict';

const chalk = require(`chalk`);
const fs = require("fs");

const DEFAULT_COUNT = 1;
const MAX_COUNT = 1000;
const FILE_NAME = `mocks.json`;
const TITLES = [
  `Ёлки. История деревьев`,
  `Как перестать беспокоиться и начать жить`,
  `Как достигнуть успеха не вставая с кресла`,
  `Обзор новейшего смартфона`,
  `Лучшие рок-музыканты 20-века`,
  `Как начать программировать`,
  `Учим HTML и CSS`,
  `Что такое золотое сечение`,
  `Как собрать камни бесконечности`,
  `Борьба с прокрастинацией`,
  `Рок — это протест`,
  `Самый лучший музыкальный альбом этого года`,
];
const ANNOUNCE = [
  `Ёлки — это не просто красивое дерево. Это прочная древесина.`,
  `Первая большая ёлка была установлена только в 1938 году.`,
  `Вы можете достичь всего. Стоит только немного постараться и запастись книгами.`,
  `Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете.`,
  `Золотое сечение — соотношение двух величин, гармоническая пропорция.`,
  `Собрать камни бесконечности легко, если вы прирожденный герой.`,
  `Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике.`,
  `Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами.`,
  `Программировать не настолько сложно, как об этом говорят.`,
  `Простые ежедневные упражнения помогут достичь успеха.`,
  `Это один из лучших рок-музыкантов.`,
  `Он написал больше 30 хитов.`,
  `Из под его пера вышло 8 платиновых альбомов.`,
  `Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем.`,
  `Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле?`,
  `Достичь успеха помогут ежедневные повторения.`,
  `Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много.`,
  `Как начать действовать? Для начала просто соберитесь.`,
  `Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравятся только игры.`,
  `Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать.`,
];
const CATEGORY = [
  `Деревья`,
  `За жизнь`,
  `Без рамки`,
  `Разное`,
  `IT`,
  `Музыка`,
  `Кино`,
  `Программирование`,
  `Железо`,
];

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

const generatePublications = (count) => {
  const publications = [];

  for (let i = 0; i < count; i++) {
    const title = TITLES[getRandomInt(0, TITLES.length - 1)];
    const announce = ANNOUNCE[getRandomInt(0, ANNOUNCE.length - 1)];
    const category = CATEGORY[getRandomInt(0, CATEGORY.length - 1)];

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

module.exports = {
  name: `--generate`,
  run(params) {
    const count = Number(params[0]) || DEFAULT_COUNT;
    if (count > MAX_COUNT) {
      throw new Error(chalk.red(`Не больше ${MAX_COUNT} объявлений`));
    }
    const json = JSON.stringify(generatePublications(count), null, 4);

    fs.writeFileSync(FILE_NAME, json);
  }
};
