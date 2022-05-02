const mongoose = require("mongoose");

const favSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    favs: {
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
    }    
});

module.exports = mongoose.model('fav', favSchema);