const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{ name: String, price: Number, qty: Number, image: String }],
  totalAmount: { type: Number, required: true },
  address: { type: Object, default: {} },
  status: { type: String, default: 'Pending' },
  paymentId: { type: String, default: '' },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
