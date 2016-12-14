var express = require('express'); // access to entire express api

var app = express(); //to create app
const PORT = process.env.PORT || 3000;

//to redirect https traffic to http because the open weather map api only supports http traffic
app.use(function(req,res,next){
  if(req.headers['x-forwarded-proto'] === 'https'){
    res.redirect('http://' + req.hostname + req.url);
  }else{
    next();
  }
});

app.use(express.static('public')); // tell app which folder we want to serve ;'public'(name of folder)

app.listen(PORT, function () {    //starting the server at port 3000 and console msg on starting node
  console.log('Express server is up on '+ PORT);
});
