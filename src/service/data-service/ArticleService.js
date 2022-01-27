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

  update(id, articleData) {
    for (let i = 0; i < this._articles.length; i++) {
      if (this._articles[i].id === id) {
        this._articles[i] = {
          ...this._articles[i],
          ...articleData
        };
        return;
      }
    }
  }

  delete(id) {
    this._articles = this._articles.filter(article => article.id !== id);
  }
}


module.exports = ArticleService;
