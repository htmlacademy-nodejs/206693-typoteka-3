'use strict';
const {MOCKS_FILE_NAME} = require(`../../constants`);
const {readFile} = require('../../utils');

async function getMockData() {
  let mockData = [];

  if (mockData.length > 0) {
    return mockData;
  }
  try {
    const content = await readFile(MOCKS_FILE_NAME);
    mockData = JSON.parse(content);
  } catch (err) {
    console.log(err);
    return (err);
  }
  return mockData;
};
