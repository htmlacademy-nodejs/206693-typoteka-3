import request from 'supertest';
import {runApi} from '../../main';

export class ApiSdk {
  #api;

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
}
