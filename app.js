var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const port = process.env.PORT || 5000;
app.get('/', function(req, res){
  res.sendFile(__dirname + '/home.html');
  
});
 
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect',function(){
  	console.log('disconnected');
  });
  socket.on('message',function(msg){
  	 io.emit('message', msg);
  })
});

http.listen(port, function(){
  console.log('listening on *:5000');
});
 
  
