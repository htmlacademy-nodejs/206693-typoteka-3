import request from 'supertest';
import {runApi} from '../../main';

export class ApiSdk {
  async start() {
    this.api = await runApi(8081, 'mocks.json', 6);
  }

  async stop() {
    return new Promise((resolve, reject) => {
      this.api.server.close(() => {
        resolve();
      });
    });
  }

  getAllCategories() {
    return request(this.api.app).get('/categories');
  }

  getAllArticles() {
    return request(this.api.app).get('/articles');
  }

  getAllArticleById() {

  }

  addArticle(article) {
    return request(this.api.app)
      .post('/articles')
      .set('Content-Type', 'application/json')
      .send(JSON.stringify(article));
  }
}
