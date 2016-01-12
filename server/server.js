var express = require("express");
var app  = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

mongoose.connect('mongodb://104.236.241.151:27017/plants',function(err){
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
})

require("./routes/routes.js")(app);

app.listen(port);
console.log("Running on port " + port);
