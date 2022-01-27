'use strict';

const {MAX_ID_LENGTH} = require('../../constants');
const {nanoid} = require('nanoid');

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
    this._articles.push({
      id: nanoid(MAX_ID_LENGTH),
      ...articleData
    });
  }

  update(id, articleData) {
    this._articles = this._articles.map(article => article.id === id ? {...article, ...articleData} : article);
  }

  delete(id) {
    this._articles = this._articles.filter(article => article.id !== id);
  }

  deleteCommentById(articleId, commentId) {
    const article = this.findById(articleId);
    article.comment = article.comment.filter(comment => comment.id !== commentId);
  }

  addComment(articleId, commentData) {
    const article = this.findById(articleId);
    article.comment.push({
      id: nanoid(MAX_ID_LENGTH),
      ...commentData
    });
  }

  searchFor(query) {
    return this._articles.filter(article => article.title.includes(query));
  }
}


module.exports = ArticleService;
