const ProductRepo = require('../repo/ProductRepo');

const createProduct = async (createProductRequest)=>{
    try{
        const product = await ProductRepo.createProduct(createProductRequest);
        return product;
    }catch(err){
        console.log(err);
        throw new Error("Product Creation Failure");
    }
}

const getProduct = async ()=>{
    try{
        const products = await ProductRepo.getProducts();
        return products;
    }catch(err){
        console.log(err);
        throw new Error("Get Product Failure");
    }
}

module.exports = {createProduct, getProduct};