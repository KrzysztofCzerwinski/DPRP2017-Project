var database = require("./../config/database.js");

var Role = database.define("roles", {
  name      :String
});

module.exports = Role;
