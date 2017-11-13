var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var database = require("./config/database.js");
var User = require("./model/user.js");
var Role = require("./model/role.js");
var bcrypt = require("bcrypt");


app.use(bodyParser.urlencoded({extended: true}));


app.post("/api/users", function(req, res){
  var saltRounds = 10;
  var hash = bcrypt.hashSync(req.body.password, saltRounds);
    Role.one({"name": "user"}, function(err,results){
      User.create(
      {
        login:req.body.login,
        password: hash,
        role: results.id
      }, function (err, items) {
          if(err){
            console.log(err);
            res.status(400).send(JSON.stringify({
              success: false,
              message: err.msg
            }));
          }
          else {
            res.status(201).send(JSON.stringify({
                success: true
            }));
          }
      });
    });
});



app.get("/api/users", function(req,res){
  database.driver.execQuery("SELECT login, name, surname, birthDate, isDeleted FROM users", function (err, result) {
    if(err){
      res.status(400).send(JSON.stringify({
        success : false
      }));
    }
    else {
      res.status(200).send(JSON.stringify({
        success: true,
        users: result
      }));
    }
  });
});



app.use('/',function (req,res){
  res.send("Hello World");
});

app.listen(3000, function(){
  console.log("Listening on port 3000");
});
