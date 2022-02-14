import {ApiSdk} from './sdk/ApiSdk';

describe("Categories", () => {
  let sdk;

  beforeEach(() => {
    sdk = new ApiSdk();
    return sdk.start();
  });

  it("Should return all categories", async () => {
    const res = await sdk.getAllCategories();
    expect(res.body).toEqual([
      "Без рамки",
      "За жизнь",
      "За жизнь",
      "IT"
    ]);
  });

  afterEach(() => {
    return sdk.stop();
  });
});
