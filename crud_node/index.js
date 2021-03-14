// load packages
var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var Book = require("./model/book");
var router = require("./routes")(app, Book);

// body-parser를 이용한 app의 구성
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json()); 

//server port
const port  = process.env.PORT || 3000;

var server = app.listen(port, function() {
   var host = server.address().address;
   var port = server.address().port;
   
   console.log('server is working: port-', port)
});

// connect to mongoDB server
// mongoose.connect() method로 접속
const connect = mongoose.connect('mongodb://127.0.0.1:27017/test', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.get('/', function(req, res) {
    res.send('Hello World')
});



 
    
