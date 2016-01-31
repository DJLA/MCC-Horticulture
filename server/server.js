var express = require("express");
var app  = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Methods","POST, GET, OPTIONS, PUT, DELETE")
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

var router = express.Router();

mongoose.connect('mongodb://104.236.241.151:27017/plants',function(err){
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
})

require("./routes/routes.js")(app);
require("./sample.js")();
app.listen(port);
console.log("Running on port " + port);
