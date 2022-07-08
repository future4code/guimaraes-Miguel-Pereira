import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Product } from "../data/types";


const getAllProducts = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const products: Product[] = await connection("labecommerce_products")
        .select()

        if(!products.length){
            errorCode = 404;
            throw new Error("Nenhum produto encontrado.");
        }

        res.status(200).send(products);
    } catch (error: any) {
        res.status(errorCode).end(error.message || error.sqlMessage);
    }
}

export default getAllProducts;