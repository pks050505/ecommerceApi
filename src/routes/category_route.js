const CategoryController = require("../controllers/category_controller");

const CategoryRoutes=require("express").Router();


CategoryRoutes.post("/",CategoryController.createCategory);
CategoryRoutes.get("/:id",CategoryController.fetchCategoryById);
CategoryRoutes.get("/",CategoryController.fetchAllCategory);
module.exports=CategoryRoutes;