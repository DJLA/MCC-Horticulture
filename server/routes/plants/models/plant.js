var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PlantSchema = new Schema({
    name:String,
    description:String,
    family:String,
    zone:String
})

module.exports = mongoose.model("Plant",PlantSchema);