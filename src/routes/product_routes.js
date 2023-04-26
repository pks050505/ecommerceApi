const ProductController = require("../controllers/product_controller");

const ProductRoutes=require("express").Router();

ProductRoutes.post("/",ProductController.createProduct);

ProductRoutes.get("/",ProductController.fetchAllProducts);
ProductRoutes.get("/:id",ProductController.fetchProductById);
ProductRoutes.get("/category/:id",ProductController.fetchProductByCategory);
module.exports=ProductRoutes;