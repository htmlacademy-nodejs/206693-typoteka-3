import {nanoid} from 'nanoid';

export class ArticleService {
  constructor(articles, maxIdLength) {
    this._maxIdLength = maxIdLength;
    this._articles = articles;
  }

  findAll() {
    return this._articles;
  }

  findById(id) {
    return this._articles.find(article => article.id === id);
  }

  create(articleData) {
    this._articles.push({
      id: nanoid(this._maxIdLength), ...articleData
    });
  }

  update(id, articleData) {
    this._articles = this._articles.map(article => article.id === id ? {...article, ...articleData} : article);
  }

  delete(id) {
    this._articles = this._articles.filter(article => article.id !== id);
  }

  findCommentsByArticleId(id) {
    return this.findById(id).comment;
  }

  addComment(articleId, commentData) {
    const article = this.findById(articleId);
    article.comment.push({
      id: nanoid(this._maxIdLength), ...commentData
    });
  }

  deleteCommentById(articleId, commentId) {
    const article = this.findById(articleId);
    article.comment = article.comment.filter(comment => comment.id !== commentId);
  }
}
