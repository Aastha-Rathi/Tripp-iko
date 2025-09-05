const User = require('../models/User');

exports.updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: 'Error updating profile', error: err });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching profile', error: err });
  }
};

exports.addTravelPlan = async (req, res) => {
  try {
    const {
      name,
      bio,
      travelerType,
      interests,
      preferredDestinations,
      travelDates
    } = req.body;
    
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (req.file) {
      user.profilePic = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
    }
    if (name) user.name = name;
    if (bio) user.bio = bio;
    if (travelerType) user.travelerType = travelerType;
    if (interests) user.interests = interests;
    if (preferredDestinations) user.preferredDestinations = preferredDestinations;
    if (travelDates && travelDates.from && travelDates.to) {
      user.travelDates = {
        from: new Date(travelDates.from),
        to: new Date(travelDates.to)
      };
    }
    await user.save();
    res.status(200).json({
      message: 'Travel plan and profile updated',
      user
    });
  } catch (err) {
    res.status(500).json({ message: 'Error updating travel plan/profile', error: err.message });
  }
};

exports.searchByDestination = async (req, res) => {
  try {
    const { destination } = req.query;
    const users = await User.find({
      'travelPlans.destination': { $regex: destination, $options: 'i' }
    }).select('username name bio profilePic travelPlans');

    res.status(200).json({ results: users });
  } catch (err) {
    res.status(500).json({ message: 'Error searching users', error: err.message });
  }
};