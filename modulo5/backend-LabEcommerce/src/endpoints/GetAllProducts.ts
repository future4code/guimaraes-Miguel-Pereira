import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Product } from "../data/types";


const getAllProducts = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    try {
        let order = req.query.order as string
        let search = req.query.search as string

        if(order?.toUpperCase() !== "ASC" && order?.toUpperCase() !== "DESC"){
            order = ''
         };
        if(!search){
            search = ''
        }

        const products: Product[] = await connection("labecommerce_products")
        .select()
        .where('name', 'like', `%${search}%`)
        .orderBy('name', order.toUpperCase() )
        
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