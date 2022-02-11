const request = require('supertest');
import {runApi} from '../main.js';

describe("Categories", () => {
  let api;

  beforeEach(async () => {
    api = await runApi(8081, "mocks.json", 6);
  });

  it("Should return all categories", async () => {
    const res = await getAllCategories();
    expect(res.body).toEqual([
      "Без рамки",
      "За жизнь",
      "За жизнь",
      "IT"
    ]);
  });

  afterEach((done) => {
    api.server.close(() => {
      done();
    });
  });

  async function getAllCategories() {
    return request(api.app).get("/categories");
  }
});
