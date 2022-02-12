export class SearchService {
  constructor(articles) {
    this._articles = articles;
  }

  searchFor(query) {
    return this._articles.filter(article => article.title.includes(query));
  }
}
