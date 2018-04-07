var express = require('express');
var app = require('../../server.js');
var router = express.Router();
var jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('5614c9c2cca645bda7b2af79fe809db2');

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");//Origin, X-Requested-With, Content-Type, Accept
  next();
});

/*router.use(function(req, res, next){
    var token = req.get('token');

    if(token){
        jwt.verify(token, app.get('superSecret'), function(err, decode){
            if(err)
                res.json({success: false, message: 'Failed To Authenticate Token.'});
            else {
                req.decode = decode;
                console.log('username', decode.username);
                next();
            }
        });
    } else {
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }
});*/


router.get('/', function(req, res) {
    var source = req.param('source');

    console.log(source);
    newsapi.v2.topHeadlines({
        sources: source
    }).then(response => {
        console.log(response);
        res.json({ message: response });
    });
});

module.exports = router;
