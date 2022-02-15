import {ApiSdk} from './sdk/ApiSdk';

describe("Categories", () => {
  let sdk;

  beforeEach(async () => {
    sdk = await new ApiSdk().init();
  });

  it("Should have 0 categories when no article added", async () => {
    expect(await sdk.getAllCategories()).toEqual([]);
  });
});
