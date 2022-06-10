import { application } from "express";
import { Users, USER_TYPES } from "./data";
import { app } from "./app"
import { Request, Response } from "express"

// 1.
// Usaremos o metodo GET
//Get All Users
app.get("/users", (req: Request, res: Response) => {
    try{
        const name = req.query.name
        let error = 0
        if(!Users.length){
            error = 404
            res.status(error).send("Nenhum usuário encontrado")
        }
        res.status(200).send(Users)
    }
    catch{

    }
})

//2.
//Get User By Type
app.get("/users/type/:type", (req: Request, res: Response) => {
    let errorCode = 500;
    try{
        const type = req.params.type
        const typeUpper = type.toUpperCase()

        if(typeUpper !== USER_TYPES.ADMIN && typeUpper !== USER_TYPES.NORMAL){
            errorCode = 422;
            throw new Error("O parametro type deve ser 'ADMIN' ou 'NORMAL'");        
        };
        // if(typeUpper === undefined || null){
        //     errorCode = 404;
        //     throw new Error("Nenhum parâmetro foi passado");            
        // }
       
        const filteredType = Users.filter(
            (u) => u.type === typeUpper
          );

        
        res.status(200).send(filteredType)
    }
    catch(error: any){
        res.status(errorCode).send(error.message);
    }
})

//Get User By Name 
app.get("/users/name/:name", (req: Request, res: Response) => {
    let errorCode = 0
    try{
        const name = req.params.name
        const nameLower = name.toLowerCase()

        const filteredUser = Users.filter((u) => {
           if( u.name.toLowerCase() === nameLower ) {
               return u
           }
        })
        res.status(200).send(filteredUser)
    }
    catch(error: any){
        res.status(errorCode).send(error.message);
    }
})