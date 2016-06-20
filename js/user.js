/**
 * Created by ubuntu on 20/6/16.
 */
var express = require('express');
var http = require('http');
var app = express();

app.get('/', function(req ,res ){
    res.send("User Authentication");
});

app.get('/login' , function(req ,res){
    res.send("Login Page");
});

var server = app.listen(3004 , function(){
    console.log("server listening at port 3004");
})