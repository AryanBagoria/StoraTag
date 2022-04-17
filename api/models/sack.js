const mongoose = require('mongoose');

module.exports = mongoose.model('Sack', new mongoose.Schema({
  uid: String,
  entry_date: String,
  expiration_date: String,
  location: String,
  weight: String,
  moisture: String,
  cost: String,
  floor_location: String,
  sensorData: Array
}, { collection: 'stock' }));