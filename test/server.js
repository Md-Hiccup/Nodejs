/**
 * Created by ubuntu on 16/6/16.
 */
var express = require ('express');
var app = express();
/*
app.get('/', function(req , res ){
    res.send("Hello World");
});
*/
require('./router/main')(app);
app.set('view',__dirname + '/view');
app.set('view engine','ejs');
app.engine('html' , require('ejs').renderFile);

var cal = function(){
    console.log("Server start on port 3000");
};
var server = app.listen(3000 ,"192.168.32.18", cal);