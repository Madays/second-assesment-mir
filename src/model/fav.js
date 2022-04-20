const mongoose = require("mongoose");

const favSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('fav', favSchema);