const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const app = express();

const connectDB = require('./config/db');

connectDB();
app.use(cors());

  app.get('/', (req, res) => {
    res.send('ShopNest API is running in Development mode...');
  });
 
app.use(express.json());
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
// app.use('/api/payment', require('./routes/paymentRoutes'));
// app.use('/api/analytics', require('./routes/analyticsRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));