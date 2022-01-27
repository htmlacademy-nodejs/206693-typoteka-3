'use strict';

const {MAX_ID_LENGTH} = require("../../constants");
const {nanoid} = require("nanoid");

class ArticleService {

  constructor(articles) {
    this._articles = articles;
  }

  findAll() {
    return this._articles;
  }

  findById(id) {
    return this._articles.find(article => article.id === id);
  }

  findCommentsFor(id) {
    return this.findById(id).comment;
  }

  create(articleData) {
    const article = {
      id: nanoid(MAX_ID_LENGTH),
      ...articleData
    };
    this._articles.push(article);
  }
}


module.exports = ArticleService;
