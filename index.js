const express = require('express');
// function handler
const app = express();
// supplying app to http server
const http = require('http').Server(app);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

const PORT = 3001;
http.listen(PORT, () => {
  console.log('Listenining on *:3001');
});