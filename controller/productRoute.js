const express = require('express');
const router = express.Router();
const Product = require('../model/product-schema');
const Category = require('../model/category-schema');

//GET products of a specific category
router.get('/:categoryId', async (req,res) => {
    try {
        const categoryId = req.params.categoryId;
        const products = await Product.find({ category: categoryId });
        const categoryName = await Category.findById(categoryId).select('name');
        res.render('product-detail', {
            products: products,
            categoryId: categoryId,
            categoryName: categoryName.name
        });
    }catch (err) {
        res.status(500).send('Server Error');
        console.error(err);
    }
});

//POST add a new product
router.post('/:categoryId',async(req,res) => {
    try{
        const categoryId = req.params.categoryId;
        
        // Clean formatted price inputs (remove dots)
        const cleanPriceIn = req.body.priceIn ? parseInt(req.body.priceIn.replace(/\./g, '')) : null;
        const cleanPriceOut = req.body.priceOut ? parseInt(req.body.priceOut.replace(/\./g, '')) : null;
        const cleanPricePer = req.body.pricePer ? parseInt(req.body.pricePer.replace(/\./g, '')) : null;
        
        let { productName, productWeight, productLength, productWidth, productThick } = req.body;
        let product = new Product({
            name: productName,
            weight: productWeight,
            length: productLength,
            width: productWidth,
            thickness: productThick,
            priceIn: cleanPriceIn,
            priceOut: cleanPriceOut,
            pricePer: cleanPricePer,
            category: categoryId
        });
        await product.save();
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
router.post('/update/:categoryId/:productId', async function (req,res) {
    try{
        const productId = req.params.productId;
        const categoryId = req.params.categoryId;
        
        // Clean formatted price inputs
        const cleanPriceIn = req.body.priceIn ? parseInt(req.body.priceIn.replace(/\./g, '')) : null;
        const cleanPriceOut = req.body.priceOut ? parseInt(req.body.priceOut.replace(/\./g, '')) : null;
        const cleanPricePer = req.body.pricePer ? parseInt(req.body.pricePer.replace(/\./g, '')) : null;
        
        let { productName, productWeight, productLength, productWidth, productThick } = req.body;
        await Product.findByIdAndUpdate(productId, {
            name: productName,
            weight: productWeight,
            length: productLength,
            width: productWidth,
            thickness: productThick,
            priceIn: cleanPriceIn,
            priceOut: cleanPriceOut,
            pricePer: cleanPricePer
        });
        res.redirect('/product/' + categoryId);
    } catch (err) {
        res.status(500).send('Server Error');
        console.error(err);
    }
});

module.exports = router;