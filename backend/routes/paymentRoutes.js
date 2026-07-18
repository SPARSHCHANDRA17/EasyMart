const express = require('express');
const router = express.Router();

router.post('/create-order', (req, res) => {
  res.json({ success: true, orderId: 'demo-order-1' });
});

router.post('/verify', (req, res) => {
  res.json({ success: true });
});

module.exports = router;
