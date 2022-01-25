'use strict';
class CategoryService {
  #categories = null;

  constructor(publications) {
    this.#categories = publications.map(publication => publication.category);
  }

  findAll() {
    return this.#categories;
  }
}

module.exports = CategoryService;
