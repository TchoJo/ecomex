const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    serialNumber : Number,
    name : String,
    price : Number,
    picture: String
});

const Product = mongoose.model('products', ProductSchema);
module.exports = Product;