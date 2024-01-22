
//Server Express setting
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const path = require('path');
server.listen(3000, () => {
    console.log('listening on *:3000');
});


/// MySQL setting
var mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'cvauUGGhFI',
    password: 'DiVNwld5GM',
    // database: 'cvauUGGhFI'
});
  
// con.connect((err) => {
//     if(err){
//       console.log('Error connecting to Db');
//       return;
//     }
//     console.log('Connection established');
// });

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Result: " + result);
    });
  });

/// NodeJS setting

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.post('/', function(req, res) {

    res.sendFile(path.join(__dirname, '/match.html'));
});


