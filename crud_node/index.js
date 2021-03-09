// load packages
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

// body-parser를 이용한 app의 구성
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json()); 

app.get('/', function(req, res) {
    res.send('Hello World')
});

//server port
const port  = process.env.PORT || 3000;

const router = require('./routes')(app)

var server = app.listen(port, function() {
   var host = server.address().address;
   var port = server.address().port;
   
   console.log('server is working: port-', port)
});

// connect to mongoDB server
// mongoose.connect() method로 접속
const config = require('./config/key');
const connect = mongoose.connect(config.mongoURI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));
    
