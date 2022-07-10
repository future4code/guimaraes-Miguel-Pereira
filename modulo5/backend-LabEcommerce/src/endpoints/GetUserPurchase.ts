import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Purchase } from "../data/types";


const getUserPurchases = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    try {
        const user_id = req.params.user_id as string;
        

        const purchasesByUser: Purchase[] = await connection("labecommerce_purchases")
        .select('id', 'quantity', 'total_price')
        .where('user_id', 'like', user_id)

        if(!purchasesByUser.length){
            errorCode = 404;
            throw new Error("Nenhuma compra registrada.");
        }

        res.status(200).send(purchasesByUser);
    } catch (error: any) {
        res.status(errorCode).end(error.message || error.sqlMessage);
    }
}

export default getUserPurchases;