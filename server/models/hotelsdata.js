const {
    Schema,
    model
} = require('mongoose');

const HotelSchema = new Schema({
    title: {
        type: 'string',
        required: true
    },
    city: {
        type: 'string',
        required: true
    },
    address: {
        type: 'string',
        required: true
    },
    stars: {
        type: 'number',
        required: true
    },
    description: {
        type: 'string',
        required: true
    },
    image_url: {
        type: 'string',
    },
    single_room: {
        type: 'number',
        required: true
    },
    double_room: {
        type: 'number',
        required: true
    },    
})

 const Hotel = model("Hotel", HotelSchema);
 module.exports = Hotel;