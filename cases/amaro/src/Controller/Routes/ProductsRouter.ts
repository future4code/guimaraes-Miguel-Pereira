import express from "express";
import { ProductsController } from "../ProductsController";

export const productsRouter = express.Router();

const productsController = new ProductsController();

//Create Product
productsRouter.post("/create", productsController.createProduct)
//Get Products
productsRouter.get("/", productsController.searchProducts)
//Get Product By Id
productsRouter.get("/search/:id", productsController.getProductById)
//Delete Product By Id
productsRouter.delete("/delete/:id", productsController.deleteProduct)