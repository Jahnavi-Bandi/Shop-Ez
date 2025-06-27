// server/seed.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/product.model');

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const sampleProducts = [
  {
    name: 'Gold Bangle',
    description: 'Elegant 24k gold bangle – perfect for any occasion.',
    price: 4500,
    image: 'https://media.istockphoto.com/id/1277517088/photo/fancy-designer-antique-golden-bracelets-for-woman-fashion.jpg?s=612x612&w=is&k=20&c=QnlCHiJqJUgO4IMVuvJIXdtIKISZQ08EgFib55f_EbU='
  },
  {
    name: 'Smartwatch',
    description: 'Track your fitness and notifications in style.',
    price: 2999,
    image: 'https://media.istockphoto.com/id/1286099765/photo/close-up-of-hand-touching-smartwatch-with-health-app-on-the-screen-gadget-for-fitness-active.jpg?s=1024x1024&w=is&k=20&c=xxj8GOxtcFSjU2DcfrKwh5zZO8JCM1v2z1vWxjzqLiw='
  },
  {
    name: 'Tote Handbag',
    description: 'Spacious, stylish, and suitable for daily use.',
    price: 2199,
    image: 'https://media.istockphoto.com/id/1130688603/vector/realistic-3d-detailed-white-and-black-blank-tote-sale-bags-set-vector.jpg?s=612x612&w=is&k=20&c=VzocEEU0ka_o-b4RhYo_NH-HAuodevGPj2wvNQIkHYc='
  },
  {
    name: 'Wireless Earbuds',
    description: 'Crystal-clear sound with noise cancellation.',
    price: 1799,
    image: 'https://media.istockphoto.com/id/1419137816/photo/wireless-in-ear-headphones-with-a-case-on-a-pink-background-flat-lay.jpg?s=612x612&w=is&k=20&c=tFUmnvh-wJNCfDxNgdWsPdnwHui5zXytV69EoYwNes0='
  }
];

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  await Product.deleteMany({});
  await Product.insertMany(sampleProducts);
  console.log('✅ Sample products inserted successfully!');
  mongoose.disconnect();
})
.catch(err => {
  console.error('❌ Error seeding products:', err);
});
