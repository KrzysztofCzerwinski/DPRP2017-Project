var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var path = require("path");
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "mysql.wmi.amu.edu.pl",
  user: "s430678",
  password: "lolololo"
});

con.connect(function(err){
  if (err)
  {
    throw err;
  }
  console.log("Connected");
});

app.use('/',function (req,res){
  res.send("Hello World");
});

app.listen(3000, function(){
  console.log("Listening on port 3000");
});
