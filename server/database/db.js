const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
        
    email: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'user'
    },
    
});

const db = mongoose.model('db', userSchema);
module.exports = db;