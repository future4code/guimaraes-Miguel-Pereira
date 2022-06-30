import { Request, Response } from "express"
import { connection } from "../data/connection"

export default async(req: Request, res: Response): Promise<void> =>{
   try {
      let name = req.query.name as string
      const user = await connection('aula48_exercicio')
      .select('id', 'name', 'email', 'type')
      .where({name})
      
      if(!user.length){
         res.statusCode = 404
         throw new Error("Nenhum usuário encontrado.")
      }

      res.status(200).send(user)
      
   } catch (error: any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}
