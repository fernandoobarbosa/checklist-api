import logger from './infra/logger';

const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World 2.0!');
});

app.listen(() => {
  logger.info(`Example app listening on port ${port}`);
});
