const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String
  },
  username: {
    type: String,
    required: true
  },
  passwordHashAndSalt: {
    type: String,
    required: true
  }
});

userSchema.index({ username: 1 }); // schema level

const User = mongoose.model('User', userSchema);

module.exports = User;
