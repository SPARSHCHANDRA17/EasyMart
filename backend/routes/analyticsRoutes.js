const express = require('express');
const Product = require('../models/Product');
const Order = require('../models/Order');
const User = require('../models/User');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const [products, orders, users] = await Promise.all([
      Product.countDocuments(),
      Order.countDocuments(),
      User.countDocuments(),
    ]);
    res.json({ products, orders, users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
