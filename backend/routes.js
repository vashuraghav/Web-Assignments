const router = require("express").Router();

const ProductController = require("./controller/ProductController");

router.post("/product", ProductController.createProduct);
router.get("/product", ProductController.getAllProducts);

module.exports = router;