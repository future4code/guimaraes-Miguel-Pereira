import { Request, Response } from "express"
import { connection } from "../data/connection"

export default async(req: Request,res: Response): Promise<void> =>{
    let errorCode = 500;

    try {
      let filter = req.query.filter as string;
      let order = req.query.order as string;

      if(order?.toUpperCase() !== "ASC" && order?.toUpperCase() !== "DESC"){
         order = "ASC"
      };
      if(!filter){
         filter = "email"
      };

      const users = await connection(`aula48_exercicio`)
      .orderBy(filter, order)

      if(!users.length){
         errorCode = 404
         throw new Error("Nenhum usuário encontrado")
      }

      res.status(200).send(users)
      
   } catch (error: any) {
      console.log(error)
      res.status(errorCode).send(error.message || error.sqlMessage)
   }
}
