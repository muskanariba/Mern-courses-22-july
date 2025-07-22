const express = require('express');
const router = express.Router();
const { placeOrder, getAllOrders, createOrder } = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');

router.post('/place', placeOrder); // Dummy
router.get('/admin/all', getAllOrders); // For Admin
router.post('/', protect, createOrder); // ✅ Protected

module.exports = router;
