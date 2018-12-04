const express = require('express');
const router = express.Router();

const INVITATIONS_URL = '/invitaciones';

router.get('/', (request, response) => {
  response.redirect(INVITATIONS_URL);
 });

router.get(INVITATIONS_URL, (request, response) => {
  const { title, picture, text } = request.query;
  console.log(request.params, title, picture, text)
  if(title && picture && text) {
    return response.render('invitations/details', {
      title: decodeURI(title),
      picture: decodeURI(picture),
      text: decodeURI(text),
    });
  }
  response.render('invitations/new', { INVITATIONS_URL });
});

router.post(INVITATIONS_URL, (request, response) => {
  const { title, picture, text } = request.body;
  const pictureUri = `pictures/${picture}`;
  const url = `${INVITATIONS_URL}?title=${title}&picture=${pictureUri}&text=${text}`;

  response.redirect(url);
});

module.exports = router;
