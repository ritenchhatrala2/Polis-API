var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var app = require('../../server.js');
var db = require('../../db/lowdb.js');

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");//Origin, X-Requested-With, Content-Type, Accept
  next();
});
/*router.use(function(req, res, next){
    var token = req.get('token');

    console.log(token);

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

    res.json(db.get('riten').get('saved_articles').filter({ article: { source: { id: source }}}).values());//req.decode.username
});

module.exports = router;
