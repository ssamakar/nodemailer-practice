var http = require('http');
var express = require('express');
var static = require('node-static');
var file = new static.Server('./');
var app = express();
var bodyParser = require('body-parser');
var mailer = require('./mail.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

//GETting '/' returns index.html
app.get('/', function(req, res){
    res.sendfile(__dirname + '/index.html');
});

//POSTing to '/' will execute the sendMessage function defined in mail.js using data from the form on the html page
app.post('/', function(req, res){
    res.send(req.body);
    var mailOptions = req.body;
    mailer.sendMessage(mailOptions);
    console.log("message sent!")
});

var port = process.env.PORT || 8000;

app.listen(port);
console.log("listening");