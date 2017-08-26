/*
  Socket.io:two components
    - server that integrates/mounts on to node.js server (socket.io)
    - client library that loads on the browser (socket.io-client)

   -  serves client automatically
   
   Emitting Events
    - can send and receive any events you want. (any data can be sent) 

   
*/


const express = require('express');
// function handler
const app = express();
// supplying app to http server
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  console.log('a user connected');
  // user disconnects
  socket.on('disconnect', function() {
    console.log('user disconnected');
  })
  // user connects
  socket.on('chat message', function(msg) {
    console.log(`message: ${msg}`)
  })
})

const PORT = 3001;
http.listen(PORT, () => {
  console.log('Listenining on *:3001');
});


