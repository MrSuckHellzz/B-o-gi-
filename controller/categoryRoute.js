const express= require('express');
const router = express.Router();
const Category = require('../model/category-schema');

//GET all categories
router.get('/', async (req,res) => {
    try{
        const categories = await Category.find();
        res.render('category', {
            categories: categories
        });
    } catch (err) {
        res.status(500).send('Server Error');
        console.error(err);
    }
});