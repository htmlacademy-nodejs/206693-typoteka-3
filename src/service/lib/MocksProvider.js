'use strict';
const fs = require("fs").promises;

class MocksProvider {
  #mocksFilePath = null;
  #mocks = null;

  constructor(mocksFilePath) {
    this.#mocksFilePath = mocksFilePath;
  }

  async getMockData() {
    if (!this.#mocks) {
      this.#mocks = this.parseMocksFileContent(await this.readMocksFile(this.#mocksFilePath));
    }
    return this.#mocks;
  }

  async readMocksFile(mocksFilePath) {
    try {
      return await fs.readFile(mocksFilePath, `utf8`);
    } catch (err) {
      throw new Error(`Cannot read the mock data file: ${mocksFilePath}`);
    }
  }

  parseMocksFileContent(content) {
    try {
      return JSON.parse(content);
    } catch (err) {
      throw new Error(`Cannot parse the mock data:\n${content}`);
    }
  }
}

module.exports = MocksProvider;
