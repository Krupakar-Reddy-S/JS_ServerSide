require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

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

const port = 8086;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})
