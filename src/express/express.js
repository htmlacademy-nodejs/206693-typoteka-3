'use strict';
const express = require(`express`);
const path = require(`path`);
const {DEFAULT_PORT, PUBLIC_DIR} = require(`../constants`);
const mainRouter = require(`./routers/main-router`);
const articlesRouter = require(`./routers/articles-router`);
const myRouter = require(`./routers/my-router`);
const registerRouter = require(`./routers/register-router`);
const loginRouter = require(`./routers/login-router`);
const searchRouter = require(`./routers/search-router`);
const categoriesRouter = require(`./routers/categories-router`);
const errorsRouter = require(`./routers/errors-router`);

const app = express();
app.set(`views`, path.resolve(__dirname, `templates`));
app.set(`view engine`, `pug`);

app.use(express.static(path.resolve(__dirname, PUBLIC_DIR)));
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
