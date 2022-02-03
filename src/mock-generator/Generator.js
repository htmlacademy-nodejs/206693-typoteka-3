import {nanoid} from 'nanoid';
import {Randomizer} from './Randomizer.js';

export class Generator {
  #MAX_COMMENTS = 4;
  #maxIdLength = null;
  #fileManager = null;

  constructor(fileManager, maxIdLength) {
    this.#maxIdLength = maxIdLength;
    this.#fileManager = fileManager;
  }

  async generatePublications(count) {
    const publications = [];

    const [titleList, announceList, categoryList, commentList] = await Promise.all([
      this.#fileManager.readTitlesFromFile(),
      this.#fileManager.readAnnouncesFromFile(),
      this.#fileManager.readCategoriesFromFile(),
      this.#fileManager.readCommentsFromFile(),
    ]);

    for (let i = 0; i < count; i++) {
      const title = titleList[Randomizer.generateInt(0, titleList.length - 1)];
      const announce = announceList[Randomizer.generateInt(0, announceList.length - 1)];
      const category = categoryList[Randomizer.generateInt(0, categoryList.length - 1)];
      const comment = this.#generateComments(Randomizer.generateInt(1, this.#MAX_COMMENTS), commentList);

      publications.push({
        id: nanoid(this.#maxIdLength),
        title: title,
        announce: announce,
        fullText: `${title} ${announce}`,
        createdDate: Randomizer.generateDate(),
        category: category,
        comment: comment,
      });
    }

    return publications;
  }

  #generateComments(count, comments) {
    const result = [];
    for (let i = 0; i < count; i++) {
      result.push({
        id: nanoid(this.#maxIdLength),
        text: Randomizer.randomizeArray(comments)
          .slice(0, Randomizer.generateInt(1, 3))
          .join(` `),
      });
    }
    return result;
  }
}
