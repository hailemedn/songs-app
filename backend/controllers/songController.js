const asyncHandler = require('express-async-handler')
// @desc    Get song
// @route   GET /api/goals
// @access  Public
const getSongs = asyncHandler(async (req, res) => {
    res.status(200).json({message: "Get songs"});
})

// @desc    Create song
// @route   POST /api/goals
// @access  Public
const createSong = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: "Create song"});
})

// @desc    Update song
// @route   PUT /api/goals/:id
// @access  Public
const updateSong = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update song ${req.params.id}`});
})

// @desc    Delete song
// @route   DELETE /api/goals/:id
// @access  Public
const deleteSong = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete song ${req.params.id}`});
})

module.exports = {
    getSongs,
    createSong,
    updateSong,
    deleteSong,
}