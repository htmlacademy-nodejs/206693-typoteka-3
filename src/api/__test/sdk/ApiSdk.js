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

  async getAllCategories() {
    return (await request(this.api.app).get('/categories')).body;
  }

  async getAllArticles() {
    return (await request(this.api.app).get('/articles')).body;
  }

  async countAllArticles() {
    return (await this.getAllArticles()).length;
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
