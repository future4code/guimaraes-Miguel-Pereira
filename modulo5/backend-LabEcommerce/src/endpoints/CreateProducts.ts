import { Request, Response } from "express";
import { v4 as generateId } from 'uuid'
import { Product } from "../data/types";
import { createNewProduct } from "../data/functions";

const createProducts =async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        let { name, price, image_url } = req.body

        if(!name || !price || !image_url){
            errorCode = 406
            throw new Error("Algum parâmetro não foi preenchido!");  
        };

        const newProduct: Product = {
            id: generateId(),
            name,
            price,
            image_url
        };

        if(typeof name !== 'string' || typeof image_url !== 'string' ){
            errorCode = 406
            throw new Error("name e image_url devem ser string.");
        }
        if(typeof price !== 'number'){
            errorCode = 406
            throw new Error("price deve ser um number.");
        }
        if(price < 0){
            errorCode = 406
            throw new Error("price não pode ser negativo");
        }
        
        await createNewProduct( newProduct );
        res.status(201).send('Produto adicionado.')
    } catch (error: any) {
        res.status(errorCode).end(error.message || error.sqlMessage);
    }
}

export default createProducts;