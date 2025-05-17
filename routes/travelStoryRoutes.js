const express = require('express');
const router = express.Router();
const TravelStory = require('../models/TravelStory');

// POST route to add a travel story
router.post('/add', async (req, res) => {
  try {
    const { title, story, visitedLocation, imageUrl, visitedDate } = req.body;

    // Basic validation
    if (!title || !story || !visitedLocation || !imageUrl || !visitedDate) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const newStory = new TravelStory({
      title,
      story,
      visitedLocation,
      imageUrl,
      visitedDate
    });

    await newStory.save();
    res.status(201).json({ message: 'Travel story added successfully.', story: newStory });
  } catch (error) {
    res.status(500).json({ error: 'Server error while adding travel story.' });
  }
});

module.exports = router;
