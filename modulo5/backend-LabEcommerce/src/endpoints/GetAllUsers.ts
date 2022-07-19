import { Request, Response } from "express";
import { connection } from "../data/connection";
import { User } from "../data/types";


const getAllUsers = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const users = await connection("labecommerce_users")
        .select()
        // .innerJoin(
        //     "labecommerce_purchases",
        //     function () {
        //       this
        //       .on("labecommerce_purchases.user_id", "=", "labecommerce_users.id")
        //     }
        //   )

        if(!users.length){
            errorCode = 404;
            throw new Error("Nenhum usuário encontrado.");
        }

        res.status(200).send(users);
    } catch (error: any) {
        res.status(errorCode).end(error.message || error.sqlMessage);
    }
}

export default getAllUsers;