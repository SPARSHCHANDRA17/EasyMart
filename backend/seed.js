const mongoose = require('mongoose');
const Product = require('./models/Product');
const User = require('./models/User');
const bcrypt = require('bcryptjs');

(async () => {
  await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/easymart');
  await Product.deleteMany({});
  await User.deleteMany({});

  const adminPassword = await bcrypt.hash('admin123', 10);
  await User.create({ name: 'Admin', email: 'admin@easymart.com', password: adminPassword, role: 'admin' });

  await Product.create([
    { name: 'Classic Tee', description: 'Comfortable everyday tee', price: 499, category: 'Clothing', stock: 10, image: '/uploads/sample1.jpg' },
    { name: 'Canvas Bag', description: 'Stylish everyday bag', price: 799, category: 'Accessories', stock: 8, image: '/uploads/sample2.jpg' },
  ]);

  console.log('Seeded');
  process.exit(0);
})();
