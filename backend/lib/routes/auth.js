var express = require('express');
var app = require('../../server.js');
var router = express.Router();
var db = require('../../db/lowdb.js');
var jwt = require('jsonwebtoken');
var config = require('../../config.js');
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
app.set('superSecret', config.secret);

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");//Origin, X-Requested-With, Content-Type, Accept
  next();
});

router.post('/', function (req, res) {
	console.log(req.body.username);
	const post = db.get('posts').find({ id: 1 }).value();
	const username = db.get(req.body.username).get('username').value();
	const password = db.get(req.body.username).get('password').value();

	if (!username && !password) {
		res.json({ success: false, message: 'Authentication failed. User not found.' });
	} else if (username == req.body.username && password == req.body.password) {
		var user = new Object();
        user.username = username;
        user.password = password;
        var token = jwt.sign(user, app.get('superSecret'), {
            expiresIn: 1440 // expires in 24 hours
        });
        console.log('send response');
        console.log(token);
        res.json({
            success: true,
            message: 'Enjoy Your Token',
            token: token
        })
	} else {
		res.json({ success: false, message: 'Authentication failed.' });
	}
});

module.exports = router;
