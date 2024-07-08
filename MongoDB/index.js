require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(express.json());

mongoose
    .connect(
        process.env.MONGO_URI
    )
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("Failed: ", err);
    });

// Product Schema
const productSchema = new mongoose.Schema({
    product_name : {
        type : String,
        required : true
    },
    product_price : {
        type : String,
        required : true
    },
    isInStock : {
        type : Boolean,
        required : true
    },
    category : {
        type : String,
        required : true
    }
});

// Product Model
const productModel = mongoose.model('Product', productSchema);

// Create a new product
app.post('/api/products', async (req, res) => {
    const body = req.body;

    const product = productModel.create({
        product_name : body.product_name,
        product_price : body.product_price,
        isInStock : body.isInStock,
        category : body.category
    })

    console.log(product);

    return res.status(201).json({message : 'Product Created'});
});

// get products
app.get('/api/products', async (req, res) => {
    const products = await productModel.find({});

    return res.status(200).json(products);
});

// get product by id
app.get('/api/products/:id', async (req, res) => {
    const product = await productModel.findById(req.params.id);

    return res.status(200).json(product);
});

// update product by id
app.put('/api/products/:id', async (req, res) => {
    const updatedProduct = await productModel.findByIdAndUpdate(req.params.id, req.body);

    return res.status(200).json(updatedProduct);
});

// delete product by id
app.delete('/api/products/:id', async (req, res) => {
    const deletedProduct = await productModel.findByIdAndDelete(req.params.id);

    return res.status(200).json(deletedProduct);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})
