var database = require("./../config/database.js");

var User = database.define("users", {
  login     :String,
  password  :String,
  name      :String,
  surname   :String,
  birthDate :String,
  isDeleted :Boolean,
  role      :Number
},{
  validations: {
    login: [database.validators.rangeLength(5,20, "Zła długość loginu!"),
            database.validators.patterns.match("^[a-zA-z0-9\\-\\_]*$", "Złe znaki w loginie!")],
    name: database.validators.rangeLength(0,75, "Zła długość imienia"),
    surname: database.validators.rangeLength(0,150, "Zła długość imienia")
  }
},{
  methods: {
    validatePassword: function (password){
      return (password.length < 8 || password.length > 20)
    }
  }
});

module.exports = User;
