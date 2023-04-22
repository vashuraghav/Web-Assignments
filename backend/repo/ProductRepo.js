const ProductSchema  = require("../models/ProductSchema");

const createProduct = async(product)=> {
    const newProduct = new ProductSchema(product);
    return await newProduct.save();
}

const getProducts = async()=> {
    const products = await ProductSchema.find();
    return products;
}

module.exports = {createProduct, getProducts}