import { Request, Response } from "express"
import { connection } from "../data/connection"

async function filterUserName(name: string):Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio
      WHERE name = ${name};
   `)

   return result[0]
}

export const getUserByName = async(req: Request,res: Response): Promise<void> =>{
   try {
      const name = req.query.name
      const user = await filterUserName(name as string)

      if(!user.length){
         res.statusCode = 404
         throw new Error("Nenhum usuário encontrado")
      }

      res.status(200).send(user)
      
   } catch (error: any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}
