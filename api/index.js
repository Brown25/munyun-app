// This is the backend server for the Munyun-APP


const express = require('express');
const cors = require('cors');
require('dotenv').config();
const Transaction = require('./models/transaction'); // Import the Transaction model
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json()); // Middleware to parse JSON

app.get('/api/test', (req, res) => {
  res.json('test okay3');
});

app.post('/api/transaction', (req, res) => {
  
  //console.log(process.env.MONGO_URL);
  const{ name, description, dateTime } = req.body; // Destructures the body
  mongoose.connect(process.env.MONGO_URL);
  res.json(req.body); // Responds with the received body
});

app.listen(4040, () => {
  console.log('Server running on http://localhost:4040');
});
//OLRUE4ISCv2ewwgx
