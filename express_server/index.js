const express = require('express');
const app = express();
const port = 3000;

const createdMiddleware = (req, res, next) => {
  console.log('Middleware has been run!');
  next();
};

const requestedTimeMiddleware = (req, res, next) => {
  req.requestedTime = Date.now();
  next();
};

app.use(createdMiddleware);
app.use(requestedTimeMiddleware);

app.get('/', (req, res) => {
  res.send(`Hello world!<br /> Some other ${req.requestedTime}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
