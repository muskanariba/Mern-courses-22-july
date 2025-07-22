const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: Number,
  image: String,  // URL ya file path
});

module.exports = mongoose.model('Course', courseSchema);
