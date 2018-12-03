const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
  const query = JSON.stringify(request.query)
  response.render('index', {title: 'Hello world', query});
});

router.get('/alta', (request, response) => {
  response.render('invitations_new');
});

module.exports = router;
