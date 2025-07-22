const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  items: [
    {
      courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course', // or 'Book'
        required: true,
      },
      title: String,
      price: Number,
    },
  ],
  isDelivered: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// 🛡️ Prevent OverwriteModelError:
module.exports = mongoose.models.Order || mongoose.model('Order', orderSchema);
