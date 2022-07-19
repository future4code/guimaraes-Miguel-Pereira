import { Request, Response } from "express";
import { v4 as generateId } from 'uuid'
import { Purchase } from "../data/types";
import { createNewPurchase } from "../data/functions";
import { connection } from "../data/connection";

const createPurchases =async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400;
    try {
        let {user_id, product_id, quantity} = req.body;

        const productValue: any = await connection('labecommerce_products')
        .select('price')
        .where('id', product_id);
        const total_price = Number(quantity * productValue[0].price );

        if( !user_id || !product_id || !quantity){
            errorCode = 406
            throw new Error("Algum parâmetro não foi preenchido corretamente!");
        };
        const newPurchase: Purchase = {
            id: generateId(),
            user_id,
            product_id,
            quantity,
            total_price
        }
        await createNewPurchase(newPurchase);
        
        res.status(200).send("Venda adicionada!")
    } catch (error: any) {
        res.status(errorCode).end(error.message || error.sqlMessage);
    }
}
export default createPurchases;