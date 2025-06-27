const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const productRoutes = require('./routes/product.routes'); // ✅ make sure the path is correct
const userRoutes = require('./routes/user.routes');
const app = express();
const port=process.env.PORT || 4000;
app.use(cors());
app.use(express.json());

connectDB();
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes); // ✅ must match exactly

app.listen(5000, () => {
  console.log('🚀 Server running on http://localhost:5000');
});
