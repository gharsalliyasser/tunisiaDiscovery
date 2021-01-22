const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HotelSchema = new Schema({
    title: String,
    city: String,
    address: String,
    stars: [Number],
    description: String,
    image_url: String,
    single_room: Number,
    double_room: Number,
       
})

module.exports = mongoose.model("Hotel", HotelSchema);