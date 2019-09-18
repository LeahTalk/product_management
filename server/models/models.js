const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/product_management', {useNewUrlParser: true});

const ProductSchema = new mongoose.Schema({
    title: {type: "string", required: [true, "Title must be at least 4 characters!"], minLength: 4},
    price: {type: "number", required: [true, "Price must be given!"]},
    imageURL: {type: "string", default: "https://cdn0.iconfinder.com/data/icons/shopping-cart-26/1000/Shopping-Basket-03-512.png"},
    },
     {timestamps: true})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
