const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: "https://via.placeholder.com/150", 
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = { UserModel };
