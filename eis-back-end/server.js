var express = require('express');
var bodyParser = require('body-parser');
//var mongo = require('mongodb').MongoClient;
var mongoose = require('mongoose');
//var database ; //global object for creating database
//Similar to an entity in hibernate
var Message = mongoose.model('Message',{
    username:String,
    password:String
});

var app = express(); //Instantiate the express obj and create a server app obj

app.use(bodyParser.json()); //Now express will parse any POST body with the bodyParser JSON format

//Custom middleware
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Origin','Content-Type, Authorization');
    next();//so that it does not freeze the middleware chain
});//end:app.use

//STEP2: Create an endpoint to be accessible on the URL
app.post('/api/message',function(req,res){
    console.log(req.body);    
    var message = new Message(req.body);
    message.save();
    res.status(200);
    res.send({status:'Success'});
    //end:if    
});//end:post

app.get('/api/message',function(req,res){
    Message.find({}).exec(function(err,result){
        res.send(result);
    });//end:exec
});//end:get


mongoose.connect("mongodb://localhost:27017/test",function(err,db){
    (!err)?console.log('We are connected to mongo'):console.log('Connection error',err);
    if(!err){
        database = db;    
    }
});//end:connect

//STEP1: Create a server and a port to listen to
var server = app.listen(5000, function(){
    console.log('Listening on port :', server.address().port); // tells on which port the server is listening
});//end:server

