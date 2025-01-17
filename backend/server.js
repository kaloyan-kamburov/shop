import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import products from './data/products.js';

const port = process.env.PORT || 5000;

const app = express();

connectDB(); // Connect to MongoDB

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/products', (req, res) => {
  res.json(products);
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.send(product);
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})