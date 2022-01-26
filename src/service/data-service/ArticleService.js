'use strict';

class ArticleService {

  constructor(articles) {
    this._articles = articles;
    this._articlesById = null;
  }

  findAll() {
    return this._articles;
  }

  findById(id) {
    this.ensureCache();
    return this._articlesById[id];
  }

  findCommentsFor(id) {
    return this.findById(id).comment;
  }

  ensureCache() {
    if (!this._articlesById) {
      this._articlesById = {};
      for (const article of this._articles) {
        this._articlesById[article.id] = article;
      }
    }
  }
}


module.exports = ArticleService;
