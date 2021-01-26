const mongoose = require('mongoose');
const Schema = mongoose.Schema
const placesSchema = new Schema({
  name:String,
  description:String,
  imageUrl: String,
  category: String,
  videolink:String,
  info:String,
  extraimage1:String,
  extraimage2:String,
  extraimage3:String,
  extraimage4:String,
  extraimage5:String,
  extraimage6:String,

})

const placesModel = mongoose.model('places', placesSchema);
module.exports = placesModel;