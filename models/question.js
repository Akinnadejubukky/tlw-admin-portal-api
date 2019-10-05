const mongoose = require('mongoose');

const { Schema } = mongoose;

const questionSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  desc: String,
  type: {
    type: Number, // 1 Single, 2 Multiple, 3 Short, 4 Long
    required: true
  },
  options: [
    {
      type: String
    }
  ],
  compulsory: {
    type: Boolean,
    default: false
  },
  score: {
    type: Number,
    default: 1
  },
  name: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Question', questionSchema);
