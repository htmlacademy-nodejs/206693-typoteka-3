'use strict';
const express = require(`express`);
const chalk = require(`chalk`);
const {DEFAULT_PORT} = require(`../../constants`);
const postsRoutes = require(`./routers/posts-router`);

module.exports = {
  name: `--server`,
  run(portArg) {
    const port = validatePort(portArg);
    const app = express();
    app.use(express.json());
    app.use(`/posts`, postsRoutes);
    app.listen(port, (error) => {
      if (error) {
        console.error(chalk.red(error));
      } else {
        console.info(chalk.green(`Server is listening on port: ${port}`));
      }
    });
  }
};

function validatePort(port) {
  return Number(port[0]) || DEFAULT_PORT;
}
