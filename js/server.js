/**
 * Created by ubuntu on 14/6/16.
 */
var express = require('express');
var app = express();

app.get('/', function (req , res){
    res.send("Hello World");
});

app.get('/jsonObject' , function(req ,res){
    res.json({"name":"dastanHussain" , "age": "20"});
});

app.get('/jsonArray' , function(req ,res){
    res.json(["dastanHussain","DastanIqbal "]);
});

app.get('/jsonArray1' , function(req , res){
    res.json([{"name": "dastanHussain", "age" : "20"},
            {"name":"DastanIqbal", "age":"25"}])
});

app.get('/jsonArray2' , function(req ,res ){
    res.json({"name": "hiccup", "age":"20" ,
        "add":{ "block":"b3", "city":"newDelhi"}
        })
});

var callback = function(){
    var host = server.address().address ;
    var port = server.address().port ;

    console.log("Example app listening at http://%s:%s", host, port)
};
var server = app.listen(8081 ,'192.168.32.18' ,callback ) ;

