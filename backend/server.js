var express = require('express');
var app = module.exports = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var jwt = require('jsonwebtoken');
var session = require('client-sessions');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/authenticate', require('./lib/routes/auth.js'));
app.use('/api/source', require('./lib/routes/source.js'));
app.use('/api/savearticle', require('./lib/routes/article.js'));
app.use('/api/searchsa', require('./lib/routes/search.js'));

app.listen(8081, function (req, res) {
    console.log('Server Start on 8081');
});
