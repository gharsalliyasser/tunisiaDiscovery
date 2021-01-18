const {
    Schema,
    model
} = require('mongoose');

const carShema = new Schema({
    title: {
        type: 'string',
        required: true
    },
    imageUrl: {
        type: 'string',
        required: true
    },
    text: {
        type: 'string',
        required: true
    },
    price: {
        type: 'number',
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

const car = model('car', carShema);

module.exports = car;