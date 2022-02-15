import request from 'supertest';
import {createApp} from '../../main';

export class ApiSdk {
  async init() {
    this.app = await createApp(8081, 'mocks.json', 6);
    return this;
  }

  async getAllCategories() {
    return (await request(this.app).get('/categories')).body;
  }

  async getAllArticles() {
    return (await request(this.app).get('/articles')).body;
  }

  async countAllArticles() {
    return (await this.getAllArticles()).length;
  }

  async getArticleById(id) {
    return (await request(this.app).get(`/articles/${id}`)).body;
  }

  addArticle(article) {
    return request(this.app)
      .post('/articles')
      .set('Content-Type', 'application/json')
      .send(JSON.stringify(article));
  }
}
