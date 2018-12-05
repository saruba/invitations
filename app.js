const express = require('express');
const logger = require('morgan');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const i18n = require('i18n');

const routes = require('./routes')

const DEFAULT_PORT = 3000;
const VIEWS_FOLDER = path.join(__dirname, 'views');
const LOCALES_FOLDER = path.join(__dirname, 'locales')
const STATIC_FOLDER = path.join(__dirname, 'public');
const app = express();

app.set('views', VIEWS_FOLDER);
app.set('view engine', 'pug')

app.use(express.static(STATIC_FOLDER));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

i18n.configure({
  locales:['en', 'es', 'ca'],
  defaultLocale: 'en',
  queryParameter: 'lang',
  directory: LOCALES_FOLDER,
});
app.use(i18n.init);

app.use('/', routes);

const port = process.env.PORT || DEFAULT_PORT;
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
