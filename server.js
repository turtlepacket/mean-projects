//Initialize our Express Web Framework
var express = require('express');
var app = express();

//Native NodeJS module for resolving paths
var path = require('path');

//Get our port # from a c9 environmental variable
var port = process.env.PORT;

//Connection to Mongo
var mongoose = require('mongoose');
var configDB = require('./server/config/database.js');
mongoose.connect(configDB.url);

var bodyParser = require("body-parser");
var methodOverride = require("method-override");

app.use(bodyParser.json());
app.use(methodOverride());


//set our view engine to EJS and set the directory our views will be stored in
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'client', 'views'));

app.use(express.static(path.resolve(__dirname, 'client')));

var api = express.Router();
require('./server/routes/api')(api);
app.use('/api', api);

//set our first route
app.get('*', function(req, res){
    res.render('index.ejs');
});

//make our app listen for incoming requests on the port assigned above
app.listen(port, function(){
    console.log('SERVER RUNNING...PORT:' + port);
});