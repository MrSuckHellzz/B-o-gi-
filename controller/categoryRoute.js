const express= require('express');
const router = express.Router();
const Category = require('../model/category-schema');

//GET all categories
router.get('/', async (req,res) => {
    try{
        const categories = await Category.find({});
        res.render('category', {
            categories: categories
        });
    } catch (err) {
        res.status(500).send('Server Error');
        console.error(err);
    }
});

//POST new category
router.post('/', async (req,res)=> {
    try{
        let { categoryName, categoryDescription, categoryImage } = req.body;
        let category = new Category({
            name : categoryName,
            description : categoryDescription,
            image : categoryImage
        });
        await category.save();
        res.redirect('/category');
    } catch (err) {
        res.status(500).send('Server Error');
        console.error(err);
    }
});

//POST delete category
router.post('/delete/:id', async(req,res)=>{
    try{
        const categoryId = req.params.id;
        await Category.findByIdAndDelete(categoryId);
        res.redirect('/category');
    }catch (err) {
        res.status(500).send('Server Error');
        console.error(err);
    }
});

module.exports = router;