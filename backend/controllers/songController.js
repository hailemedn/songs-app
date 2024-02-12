const asyncHandler = require('express-async-handler')
const Song = require('../models/songModel')
const { errorHandler } = require('../middleware/errorMiddleware')
// @desc    Get song
// @route   GET /api/goals
// @access  Public
const getSongs = asyncHandler(async (req, res) => {
    const songs = await Song.find()
    res.status(200).json(songs)
})

// @desc    Create song
// @route   POST /api/goals
// @access  Public
const createSong = asyncHandler(async (req, res) => {
    if(!req.body.title && !req.body.artist && !req.body.album && !req.body.genre) {
        res.status(400)
        throw new Error('Please add all required fields')
    }

    const song = await Song.create({title: req.body.title, artist: req.body.artist, album: req.body.album, genre: req.body.genre})
    res.status(200).json(song)
})

// @desc    Update song
// @route   PUT /api/goals/:id
// @access  Public
const updateSong = asyncHandler(async (req, res) => {
    const song = await Song.findById(req.params.id)
    if(!song) {
        res.status(400)
        throw new Error('Song not found')
    }

    const updatedSong = await Song.findByIdAndUpdate(req.params.id, req.body, {new: true,})
    res.status(200).json(updatedSong);
})

// @desc    Delete song
// @route   DELETE /api/goals/:id
// @access  Public
const deleteSong = asyncHandler(async (req, res) => {
    const song = await Song.findById(req.params.id)
    if(!song) {
        res.status(400)
        throw new Error('Song not found')
    }

    const deletedSong = await Song.findByIdAndDelete(req.params.id)
    res.status(200).json(deletedSong);
})

module.exports = {
    getSongs,
    createSong,
    updateSong,
    deleteSong,
}