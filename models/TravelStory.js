const mongoose = require('mongoose');

const travelStorySchema = new mongoose.Schema({
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
  title: {
    type: String,
    required: true,
    trim: true
  },
  visitedLocation: {
    type: String,
    required: true
  },
  story: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  visitedDate: {
    type: Date,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('TravelStory', travelStorySchema);
