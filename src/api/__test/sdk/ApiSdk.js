import request from 'supertest';
import {constants as HTTP_CODES} from 'http2';
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
    const response = await request(this.app).get(`/articles/${id}`);
    return response.status !== HTTP_CODES.HTTP_STATUS_NOT_FOUND ? response.body : null;
  }

  addArticle(article) {
    return request(this.app)
      .post('/articles')
      .set('Content-Type', 'application/json')
      .send(JSON.stringify(article));
  }
}
