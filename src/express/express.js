'use strict';

const express = require(`express`);
const {DEFAULT_PORT} = require(`../constants`);

const app = express();

app.listen(DEFAULT_PORT);
