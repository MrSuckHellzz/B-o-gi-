const express = require('express');
const router = express.Router();
const Product = require('../model/product-schema');

//GET products of a specific category
router.get('/:categoryId', async (req,res) => {
    try {
        const categoryId = req.params.categoryId;
        const products = await Product.find({ category: categoryId });
        res.render('product-detail', {
            products: products
        });
    }catch (err) {
        res.status(500).send('Server Error');
        console.error(err);
    }
});

module.exports = router;