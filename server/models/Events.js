//this is the schema for the events 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const eventsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
   
    youtubeLink: {
        type: String,
        required: true
    },
    dateevents: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const events = mongoose.model('events',  eventsSchema);

module.exports =  events;
