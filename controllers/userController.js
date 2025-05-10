const User = require('../models/User');

// Update user profile (after login)
exports.updateProfile = async (req, res) => {
  try {
    const userId = req.user.id; // from jwtMiddleware
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

// Get current user profile
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id); // from jwtMiddleware
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching profile', error: err });
  }
};
// ✅ New: Add Travel Plan
exports.addTravelPlan = async (req, res) => {
  try {
    const { destination, from, to, description } = req.body;
    const user = await User.findById(req.user.id);

    user.travelPlans.push({ destination, from, to, description });
    await user.save();

    res.status(200).json({ message: 'Travel plan added', user });
  } catch (err) {
    res.status(500).json({ message: 'Error adding travel plan', error: err.message });
  }
};

// ✅ New: Search by Destination
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