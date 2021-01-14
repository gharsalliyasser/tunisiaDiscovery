//this the scema for the articles 

const { Schema, model } = require('mongoose');

const NewsShema = new Schema({
    title : {
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
    date: {
        type: Date,
        default: Date.now,
    }
});

const News = model('anew', NewsShema);

module.exports = News;