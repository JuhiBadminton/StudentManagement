var mongoose = require("mongoose");

var PlayerSchema = new mongoose.Schema({
  name: String,
  level: String,
  age: String,
  fees: String,
  plan: String,
  startDate: String 
});


module.exports = mongoose.model("Player", PlayerSchema);