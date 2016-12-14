var express = require('express'); // access to entire express api

var app = express(); //to create app

app.use(express.static('public')); // tell app which folder we want to serve ;'public'(name of folder)

app.listen(3000, function () {    //starting the server at port 3000 and console msg on starting node
  console.log('Express server is up on 3000');
});
