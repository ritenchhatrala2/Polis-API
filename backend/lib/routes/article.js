var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var app = require('../../server.js');
var db = require('../../db/lowdb.js');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.post('/', function(req, res) {
    console.log('article', req.body.article);
    console.log('token', req.body.token);
    const token = req.body.token;

    jwt.verify(token, app.get('superSecret'), function(err, decode){
        if(err)
            res.json({success: false, message: 'Failed To Authenticate Token.'});
        else {
            req.decode = decode;
            username = decode.username;
            console.log('username', decode.username);

            db.get(username).get('saved_articles').push({ article: req.body.article }).write();
            console.log('value', db.get(username).get('saved_articles').value());
            res.json({ message: 'saved' });
        }
    });
});

module.exports = router;
