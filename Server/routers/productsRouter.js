const express = require('express');
const productsBL = require('../models/productsBL');

const router = express.Router();

router.get('/', async (req, res) => {
    const products = await productsBL.getProducts();
    return res.json(products);
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const product = await productsBL.getProduct(id);
    return res.json(product);
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const productUpdate = req.body;
    const product = await productsBL.updateProduct(id, productUpdate);
    return res.json(product);
});

router.post('/', async (req, res) => {
    const newProduct = req.body;
    const product = await productsBL.addProduct(newProduct);
    return res.json(product);
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const product = await productsBL.deleteProduct(id);
    return res.json(product);
});


module.exports = router;