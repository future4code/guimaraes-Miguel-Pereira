import { Request, Response} from 'express';
import { connection } from '../data/connection';

export default async (req: Request, res: Response) => {
    let errorCode
    try {
        let { name , type } = req.query;
        let filter = req.query.filter as string;
        let order = req.query.order as string;
        let page = Number(req.query.page)
        let size = Number(req.query.size)
        let offSet = size * (page - 1)
        
        if(!name){
            name = '%'
        }
        if(!type){
            type = '%'
        }
        if(order?.toUpperCase() !== "ASC" && order?.toUpperCase() !== "DESC"){
            order = "DESC"
         };
         if(!filter){
            filter = "name"
         };
         if(!page){
            offSet = 1
         }
        const user = await connection('aula48_exercicio')
        .orderBy(filter, order)
        .limit(size)
        .offset(offSet)
        if(!user.length){
            errorCode = 404
            throw new Error("Nenhum usuário encontrado.")
         }

        res.status(200).send(user)
    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}