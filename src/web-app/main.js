'use strict';

import main from 'express';
import path from 'path';
import DEFAULT_PORT from '../cli/constants.js'
import mainRouter from './routers/main-router';
import articlesRouter from './routers/articles-router';
import myRouter from './routers/my-router';
import registerRouter from './routers/register-router';
import loginRouter from './routers/login-router';
import searchRouter from './routers/search-router';
import categoriesRouter from './routers/categories-router';
import errorsRouter from './routers/errors-router';
const PUBLIC_DIR = 'public';

const app = main();
app.set('views', path.resolve(__dirname, 'templates'));
app.set('view engine', 'pug');

app.use(main.static(path.resolve(__dirname, PUBLIC_DIR)));
app.use(`/`, mainRouter);
app.use(`/articles`, articlesRouter);
app.use(`/my`, myRouter);
app.use(`/register`, registerRouter);
app.use(`/login`, loginRouter);
app.use(`/search`, searchRouter);
app.use(`/categories`, categoriesRouter);
app.use(`*`, errorsRouter);

app.listen(DEFAULT_PORT, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info(`Server is listening on port: ${DEFAULT_PORT}`);
  }
});
