const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  accountType: {
    type: String,
    enum: ["Doctor", "Admin", "Patient"],
    required: true
  },
  governmentID: {
    type: String,
  },
  dateOfBirth:{
    type: String,
  },
  address: {
    type: String,
  },
  pin: {
    type: String,
  },
  district: {
    type: String,
  },
  state: {
    type: String,
  },
  healthcareProfessionalType:{
    type:String,
  },
  healthcareSubcategory:{
    type:String,
  },
  healthcareProfessionalID:{
    type:String,
  },
  image:{
    type:String,
    required : true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
