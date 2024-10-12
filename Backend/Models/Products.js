const mongoose = require('mongoose');
// const {array} = require("../utils/upload.js")
const ProductSchema = new mongoose.Schema(
    {
        ProductName: {
            type: String,
            required: true,
        },
        ProductPrice: {
            type: Number,
            required: true,
        },
        ProductBarcode: {
            type: Number,
            required: true,
        },
        // ProductImage: {
        //     type: [],
        //     required: true
        // }
    });

const Products = mongoose.model("Products", ProductSchema)
module.exports = Products;
