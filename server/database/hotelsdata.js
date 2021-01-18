const { Schema, model } = require('mongoose');

const HotelSchema = new Schema({
    title: {
        type: 'string',
        required: true,
    },
    id: {
        type: 'integer',
        unique: true,
    },
    city: {
        type: 'string',
        required: true,
    },
    address: {
        type: 'string',
        required: true,
    },
    stars: {
        type: 'integer',
        required: true,
    },
    description: {
        type: 'string',
        required: true,
    },
    image_url: {
        type: 'string',
        required: true,
    },
    single_room: {
        type: 'integer',
        required: true,
    },
    double_room: {
        type: 'integer',
        required: true,
    }
})

const Hotel = model('hotel', HotelSchema);
module.exports = Hotel;