const mongoose = require('mongoose')

const songSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a Title']
    },
    artist: {
        type: String,
        required: [true, 'Please add the Artist']
    },
    album: {
        type: String,
        required: [true, 'Please add an Album']
    },
    genre: {
        type: String,
        required: [true, 'Please add a Genre']
    }
})

module.exports = mongoose.model('Song', songSchema)