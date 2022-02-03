'use strict';

export class CategoryService {
  constructor(publications) {
    this._categories = publications.map(publication => publication.category);
  }

  findAll() {
    return this._categories;
  }
}
