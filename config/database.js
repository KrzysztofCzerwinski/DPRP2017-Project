var orm = require("orm");

var database = orm.connect("mysql://s430678:haslo123@mysql.wmi.amu.edu.pl/s430678_DPRPProjekt");

database.on("connect", function(err){
  if(err)
  return console.error("Connection error: " + err);
});

module.exports = database;
