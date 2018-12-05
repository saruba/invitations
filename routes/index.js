const express = require('express');
const querystring = require('querystring');

const router = express.Router();
const INVITATIONS_URL = '/invitaciones';

router.get('/', (request, response) => {
  response.redirect(INVITATIONS_URL);
 });

router.get(INVITATIONS_URL, (request, response) => {
  const { title, picture, text } = request.query;

  if(title && picture && text) {
    return response.render('invitations/details', {
      title,
      text,
      picture: `pictures/${picture}`,
    });
  }
  response.render('invitations/new', { INVITATIONS_URL });
});

router.post(INVITATIONS_URL, (request, response) => {
  const { title, picture, text } = request.body;

  const params = querystring.stringify({ title, picture, text })

  const url = `${INVITATIONS_URL}?${params}`;

  response.redirect(url);
});

module.exports = router;
