import {ApiSdk} from './sdk/ApiSdk';

describe("Categories", () => {
  let sdk;

  beforeEach(() => {
    sdk = new ApiSdk();
    return sdk.start();
  });

  it("Should have 0 categories when no article added", async () => {
    expect(await sdk.getAllCategories()).toEqual([]);
  });

  afterEach(async () => {
    await sdk.stop();
  });
});
