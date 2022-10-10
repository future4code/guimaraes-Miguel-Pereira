import express from "express";
import { ProductsController } from "../ProductsController";

export const productsRouter = express.Router();

const productsController = new ProductsController();

//Create Product
productsRouter.post("/create", productsController.createProduct)
//Get Products By Query
productsRouter.get("/", productsController.searchProducts)