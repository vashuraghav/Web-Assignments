const ProductService = require('../service/ProductService');

const createProduct = async (req, res)=>{
    const productRequest = req.body;
    try{
        const product = await ProductService.createProduct(productRequest);
        res.status(200).json({"success" : true, "data": product});
    }catch(err){
        console.log(err);
        res.status(404).send({"success": false , "error_message": err.message});
    }
};

const getAllProducts = async (req, res)=>{
    try{
        const products = await ProductService.getProduct();
        res.status(200).json({"success" : true, "data": products});
    }catch(err){
        console.log(err);
        res.status(404).send({"success": false , "error_message": err.message});
    }
};

module.exports = {createProduct, getAllProducts};