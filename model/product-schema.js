const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    priceIn: Number,
    priceOut: Number,
    pricePer: Number,
    weight: Number,
    width: Number,
    thickness: Number,
    height: Number,
    category: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
        required: true
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;