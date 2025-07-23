const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Make sure you have a User model
    required: false,
  },
  items: [
    {
      title: String,
      description: String,
      price: Number,
    },
  ],
  paymentMode: {
    type: String,
    default: 'COD',
  },
  isDelivered: {
    type: Boolean,
    default: false,
  },
  orderedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Order', orderSchema);
