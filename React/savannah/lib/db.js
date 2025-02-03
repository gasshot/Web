var mysql = require('mysql2');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '910225',
    database: 'testdb'
});
db.connect();

module.exports = db;