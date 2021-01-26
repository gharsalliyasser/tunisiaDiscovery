const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: {
        unique: true,
        type: String,
    },
    number: {
        unique: true,
        type: Number,
    },
    select: String,

    password: String,

    status: {
        type: String,
        default: "user",
    },
});

const db = mongoose.model("db", userSchema);
module.exports = db;