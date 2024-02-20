const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  
  user_name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 255
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 1024
  },
 
  user_image: {
    type: String,
    required: false
  },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female']
  },
  role: {
    type: String,
    required: true,
    enum: ['user', 'admin'],
    default: 'user'
  },
  mobile: {
    type: String,
    required: true,
    minlength: 11,
    maxlength: 11
  },
  address: {
    type: String,
    required: true
  },
 
  createdAt: {
    type: Date,
    default: Date.now,
  },
 
});


const User = mongoose.model('users', userSchema);

module.exports = User;
