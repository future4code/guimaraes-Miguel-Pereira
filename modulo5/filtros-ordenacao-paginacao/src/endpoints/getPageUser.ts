import { Request, Response } from "express"
import { connection } from "../data/connection"

export default async(req: Request,res: Response): Promise<void> =>{
    let errorCode = 500;

    try {
        let page = Number(req.query.page)
        let size = Number(req.query.size)
        let offSet = size * (page - 1)
        
      const users = await connection(`aula48_exercicio`)
      .limit(size)
      .offset(offSet)

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