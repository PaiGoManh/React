const express = require('express')
const router = express.Router()
const Recipes = require('../Models/Recipes')

router.post('/addrecipe',async (req,res) => {
    try{
        const data = req.body;
        const recipe = await Recipes.create(data);
        res.status(201).json(recipe);
    } catch (error) {
        console.log(error);
        res.status(500).json({error :'Failed to add Recipe'});
    }
})

router.get('/recipes', async (req, res) => {
    try {
        const recipes = await Recipes.find();
        res.status(200).json(recipes);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to fetch recipes' });
    }
});

module.exports = router;