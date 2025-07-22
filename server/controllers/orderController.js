const Order = require('../models/Orders')
// 🟢 User places order (from cart)
const createOrder = async (req, res) => {
  try {
    const { items, totalPrice } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: 'No items to order' });
    }

    const newOrder = new Order({
      user: req.user._id,
      items,
      totalPrice
    });

    const saved = await newOrder.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to place order' });
  }
};

// 🟡 Admin gets all orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('user', 'name email');
    res.status(200).json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch orders' });
  }
};

// 🔵 Optional: Unprotected version (if needed)
const placeOrder = (req, res) => {
  res.status(200).json({ message: 'Order placed (dummy)' });
};

module.exports = { createOrder, getAllOrders, placeOrder };
