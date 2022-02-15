import {ApiSdk} from './sdk/ApiSdk';
import {musicArticle, programmingArticle} from './fixtures/article';

describe('Articles', () => {
  let sdk;

  beforeEach(async () => {
    sdk = await new ApiSdk().init();
  });

  it('Should have 0 articles when not added', async () => {
    expect(await sdk.countAllArticles()).toBe(0);
  });

  it('Should save all fields as passed', async () => {
    await sdk.addArticle(programmingArticle);
    const article = (await sdk.getAllArticles())[0];

    expect(article.title).toBe(programmingArticle.title);
    expect(article.announce).toBe(programmingArticle.announce);
    expect(article.fullText).toBe(programmingArticle.fullText);
    expect(article.category).toBe(programmingArticle.category);
  });

  it('Should have all articles when added', async () => {
    const initialNumber = await sdk.countAllArticles();
    await sdk.addArticle(programmingArticle);
    await sdk.addArticle(musicArticle);
    const resultingNumber = await sdk.countAllArticles();

    expect(resultingNumber - initialNumber).toBe(2);
  });

  it.todo('Should return article by id when exists');
  it.todo('!!! - Should do sth when the article requested by id is not added');
  it.todo('Should save the article when it\'s valid');
  it.todo('Should return Bad Request Status when the article is not valid');
  it.todo('Should save the updated article when it\'s valid');
  it.todo('Should return Bad Request Status when the updated article is not valid');
  it.todo('Should delete the article when requested');
});
