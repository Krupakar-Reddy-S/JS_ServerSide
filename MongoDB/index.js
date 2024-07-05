require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 8086;

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

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})
