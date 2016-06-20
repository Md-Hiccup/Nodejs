/**
 * Created by ubuntu on 15/6/16.
 */
var express = require('express');
var app = express();
var admin = express();
/*
app.use( function (req, res) {
    console.log('Time:', Date.now());
  //  res.send('time : ' + Date.now());
});
/*
app.use('/127.0.0.1:8082' , function( req , res , next ){
    console.log('Request Type : ', req.method);
    res.send('request  type : ' + req.method) ;
    next() ;
});
*/
app.get('/admin' , function(req , res ){
    res.send('Admin Homepage');
}) ;

app.get('/' , function(req ,res ){
    res.send('Homepage');
});

var callback = function(){
    var host = server.address().address ;
    var port = server.address().port ;

    console.log("Example app listening at http://%s:%s", host, port)
};
var server = app.listen(8082 , callback) ;
