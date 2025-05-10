// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt');
// const crypto = require('crypto');

// // Define User Schema
// const UserSchema = new Schema({
//   username: { type: String, required: true, unique: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true }
// });
// module.exports = mongoose.model('User', UserSchema);
 
// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true },
//   email: { type: String, required: true },
//   password: { type: String, required: true },

//   // New fields for Profile Info
//   name: String,
//   bio: String,
//   profilePic: String,
//   travelerType: { type: String, enum: ['solo', 'group'] },
//   preferredDestinations: [String],
//   travelDates: {
//     from: Date,
//     to: Date
//   },
//   interests: [String]
// }, { timestamps: true });

// module.exports = mongoose.model('User', userSchema);

// yaha se destination se search krne ke liye new updated code hai iske upper wale mein hi update kra hai 
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },

  name: String,
  bio: String,
  profilePic: String,
  travelerType: { type: String, enum: ['solo', 'group'] },
  interests: [String],

  travelPlans: [
    {
      destination: String,
      from: Date,
      to: Date,
      description: String
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);

