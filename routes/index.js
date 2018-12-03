const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
  const query = JSON.stringify(request.query)
  response.render('index', {title: 'Hello world'});
});

router.get('/alta', (request, response) => {
  response.render('index', {world: 'world'});
});

module.exports= router;
