const mongoose = require('mongoose');

const { Schema } = mongoose;

const registrationSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  mobile: {
    type: String,
    unique: true,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  message: String,
  interview: {
    day: {
      type: String,
      default: ''
    },
    time: {
      type: String,
      default: ''
    }
  },
  registered: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Registration', registrationSchema);
