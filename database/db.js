const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: {
    unique: true,
    type: String
  },
  password: String,
})

const hotelsSchema = new Schema({
  name: String,
  id: integer,
  city: String,
  address: String,
  stars: integer,
  image_url: String,
  description: String,
  single_room: integer,
  double_room: integer,
})

const db = mongoose.model('db', userSchema);
module.exports = db;