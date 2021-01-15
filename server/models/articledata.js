//this the scema for the articles 

const { Schema, model } = require('mongoose');

const ArticleShema = new Schema({
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
    creator:{
        type: 'string',
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

const Article = model('article', ArticleShema);

module.exports = Article;