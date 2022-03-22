const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
const Product = require('../models/Product');
const router = require('express').Router();

router.post('/', verifyTokenAndAdmin, async(req, res) => {
    const newProduct = new Product(req.body);

    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const cat = req.query.cat;

    try {
        let products;
        if(qNew){
            products = await Product.find().sort({createdAt: -1}).limit(3)
        } else if(cat){
            products = await Product.find({categories: {
                $in: [categories]
            }})
        } else {
            products = await Product.find();
        }
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;