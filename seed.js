const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./config/db');
const Product = require('./models/Product');
const User = require('./models/User');
const Order = require('./models/Order');
const bcrypt = require('bcryptjs');

const products = [
  {
    name: 'Wireless Headphones',
    description: 'Comfortable over-ear wireless headphones with noise cancellation.',
    price: 99.99,
    category: 'Electronics',
    stock: 50,
    imageUrl: 'https://via.placeholder.com/400x300?text=Headphones'
  },
  {
    name: 'Running Shoes',
    description: 'Lightweight running shoes for everyday training.',
    price: 69.99,
    category: 'Footwear',
    stock: 100,
    imageUrl: 'https://via.placeholder.com/400x300?text=Shoes'
  },
  {
    name: 'Coffee Mug',
    description: 'Ceramic mug, 350ml capacity, dishwasher safe.',
    price: 12.5,
    category: 'Home',
    stock: 200,
    imageUrl: 'https://via.placeholder.com/400x300?text=Mug'
  },
  {
    name: 'Smart Watch',
    description: 'Fitness tracking smart watch with heart-rate monitor.',
    price: 149.99,
    category: 'Electronics',
    stock: 30,
    imageUrl: 'https://via.placeholder.com/400x300?text=Watch'
  },
  {
    name: 'Backpack',
    description: 'Durable backpack with laptop compartment.',
    price: 49.99,
    category: 'Accessories',
    stock: 75,
    imageUrl: 'https://via.placeholder.com/400x300?text=Backpack'
  }
];

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('password123', 10),
    role: 'admin'
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('password123', 10)
  },
  {
    name: 'Jane Roe',
    email: 'jane@example.com',
    password: bcrypt.hashSync('password123', 10)
  }
];

const importData = async () => {
  try {
    await connectDB();

    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const createdProducts = await Product.insertMany(products);

    // Create a sample order for the second user
    const sampleOrder = {
      userId: createdUsers[1]._id,
      items: [
        {
          productId: createdProducts[0]._id,
          qty: 2,
          price: createdProducts[0].price
        }
      ],
      totalAmount: createdProducts[0].price * 2,
      address: {
        fullName: 'John Doe',
        street: '123 Main St',
        city: 'Sample City',
        postalCode: '12345',
        country: 'Country'
      },
      status: 'Pending'
    };

    await Order.create(sampleOrder);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error('Import failed:', error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await connectDB();

    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error('Destroy failed:', error);
    process.exit(1);
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  destroyData();
} else {
  console.log('Usage: node seed.js -i   # import data\n       node seed.js -d   # destroy data');
  process.exit();
}