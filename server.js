var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use('/todolist', express.static(__dirname + "/todolist"));

app.get('/',function(req, res){
  res.sendFile(__dirname + '/todolist/index.html');
});

http.listen(3000, function(){
  console.log('server start : port 3000');
});
