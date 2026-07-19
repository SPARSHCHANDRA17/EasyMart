const cloudinary = require('cloudinary').v2;
require('dotenv').config();

const requiredVariables = [
  'CLOUDINARY_CLOUD_NAME',
  'CLOUDINARY_API_KEY',
  'CLOUDINARY_API_SECRET',
];

const missingVariables = requiredVariables.filter((key) => !process.env[key]?.trim());

if (missingVariables.length) {
  throw new Error(`Missing Cloudinary configuration: ${missingVariables.join(', ')}`);
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME.trim(),
  api_key: process.env.CLOUDINARY_API_KEY.trim(),
  api_secret: process.env.CLOUDINARY_API_SECRET.trim(),
});

module.exports = cloudinary;
