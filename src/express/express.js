'use strict';

const express = require(`express`);
const {DEFAULT_PORT, PUBLIC_DIR} = require(`../constants`);
const articlesRoutes = require(`./routes/articles-routes`);
const myRoutes = require(`./routes/my-routes`);
const path = require(`path`);
const app = express();

app.use(express.static(path.resolve(__dirname, PUBLIC_DIR)));

app.set(`views`, path.resolve(__dirname, `templates`));
app.set(`view engine`, `pug`);

app.get(`/`, (req, res) => res.render(`main`));
app.get(`/register`, (req, res) => res.render(`sign-up`));
app.get(`/login`, (req, res) => res.render(`login`));
app.get(`/search`, (req, res) => res.render(`search`));
app.get(`/categories`, (req, res) => res.render(`all-categories`));
app.use(`/articles`, articlesRoutes);
app.use(`/my`, myRoutes);

app.listen(DEFAULT_PORT, (error) => {
  if (error) {
    return console.error(`Error: ${error.message}`);
  }
  return console.info(`Listen to port: ${DEFAULT_PORT}`);
});
