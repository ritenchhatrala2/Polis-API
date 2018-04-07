var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');
var db = low(adapter);

db.defaults({ 'riten': { username: 'riten', password: 'riten', saved_articles:[] } }).write();

module.exports = db;