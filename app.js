const express = require('express');
const logger = require('morgan');
const http = require('http');
const path = require('path');
const routes = require('./routes')

const DEFAULT_PORT = 3000;
const VIEWS_FOLDER = path.join(__dirname, 'views');
const STATIC_FOLDER = path.join(__dirname, 'public');
const app = express();

app.set('views', VIEWS_FOLDER);
app.set('view engine', 'pug')

app.use(express.static(STATIC_FOLDER));
app.use(logger('dev'));

app.use('/', routes);

const port = process.env.PORT || DEFAULT_PORT;
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
