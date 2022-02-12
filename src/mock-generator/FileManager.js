import {promises as fs} from 'fs';
import chalk from 'chalk';

export class FileManager {
  #FILE_ANNOUNCE_PATH = './data/announce.txt';
  #FILE_TITLES_PATH = './data/titles.txt';
  #FILE_CATEGORIES_PATH = './data/categories.txt';
  #FILE_COMMENTS_PATH = './data/comments.txt';
  #parser = null;

  constructor(parser) {
    this.#parser = parser;
  }

  async writeJsonFile(data, fileName) {
    const str = JSON.stringify(data, null, 4);
    await FileManager.#writeFile(fileName, str);
  }

  async readTitlesFromFile() {
    const str = await FileManager.#readFile(this.#FILE_TITLES_PATH);
    return this.#parser.parseData(str);
  }

  async readAnnouncesFromFile() {
    const str = await FileManager.#readFile(this.#FILE_ANNOUNCE_PATH);
    return this.#parser.parseData(str);
  }

  async readCategoriesFromFile() {
    const str = await FileManager.#readFile(this.#FILE_CATEGORIES_PATH);
    return this.#parser.parseData(str);
  }

  async readCommentsFromFile() {
    const str = await FileManager.#readFile(this.#FILE_COMMENTS_PATH);
    return this.#parser.parseData(str);
  }

  static async #readFile(path) {
    try {
      return await fs.readFile(path, 'utf8');
    } catch (err) {
      console.error(chalk.red(err));
      return ``;
    }
  }

  static async #writeFile(path, content) {
    try {
      await fs.writeFile(path, content);
      console.log(chalk.green('[SUCCESS] - Mocks file created'));
    } catch (err) {
      throw new Error(`[ERROR] - Can't write data to mocks file.\nPath: ${path}\nContent: ${content}`);
    }
  }
}
