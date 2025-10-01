const express = require('express');
const router = express.Router();
const Product = require('../model/product-schema');

//GET products of a specific category
router.get('/:categoryId', async (req,res) => {
    try {
        const categoryId = req.params.categoryId;
        const products = await Product.find({ category: categoryId });
        res.render('product-detail', {
            products: products,
            categoryId: categoryId
        });
    }catch (err) {
        res.status(500).send('Server Error');
        console.error(err);
    }
});
//POST add a new product
router.post('/:categoryId',async(req,res) => {
    try {
        const {productName, productWeight, productLength, productWidth, productThick, priceIn, priceOut, pricePer } = req.body;
        const categoryId = req.params.categoryId;
        const newProduct = new Product ({
            name: productName,
            priceIn: priceIn,
            priceOut: priceOut,
            pricePer: pricePer,
            weight: productWeight,
            width: productWidth,
            thickness: productThick,
            length: productLength,
            category: categoryId
        });
        await newProduct.save();
        res.redirect('/product/' + categoryId);
    } catch (err) {
        res.status(500).send('Server Error');
        console.error(err);
    }
});

//POST delete a product
router.post('/delete/:categoryId/:productId', async(req,res) => {
    try{
        const productId = req.params.productId;
        const categoryId = req.params.categoryId;
        await Product.findByIdAndDelete(productId);
        res.redirect(`/product/${categoryId}`);
    } catch (err) {
        res.status(500).send('Server Error');
        console.error(err);
    }
});

//POST update a product
router.post ('/update/:categoryId/:productId', async function (req,res) {
    try{
        const {productName, productWeight, productLength, productWidth, productThick, priceIn, priceOut, pricePer } = req.body;
        const productId = req.params.productId;
        const categoryId = req.params.categoryId;
        await Product.findByIdAndUpdate(productId, {
            name: productName,
            priceIn: priceIn,
            priceOut: priceOut,
            pricePer: pricePer,
            weight: productWeight,
            width: productWidth,
            thickness: productThick,
            length: productLength
        });
        res.redirect(`/product/${categoryId}`);
    } catch (err) {
        res.status(500).send('Server Error');
        console.error(err);
    }
});

module.exports = router;