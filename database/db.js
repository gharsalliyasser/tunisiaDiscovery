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

const db = mongoose.model('db', userSchema);
module.exports = db;