// transaction.js
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const TransactionSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  dateTime: { type: Date, required: true }
});

const TransactionModel = model('Transaction', TransactionSchema);

module.exports = TransactionModel;
