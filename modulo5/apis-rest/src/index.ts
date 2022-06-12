import { application } from "express";
import { Users, USER_TYPES } from "./data";
import { app } from "./app"
import { Request, Response } from "express"

//Get All Users
app.get("/users", (req: Request, res: Response) => {
    try{
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
//Create User
app.post("/user/create", (req: Request, res: Response) => {
    let errorCode = 500;
    try {
        const {name, email, type, age} = req.body;
        const typeUpper = type.toUpperCase()

        if(typeUpper !== USER_TYPES.ADMIN && typeUpper !== USER_TYPES.NORMAL){
            errorCode = 422;
            throw new Error("Type incorreto. Passe ADMIN ou NORMAL.");
        }
        if(!name || !email || !type || !age){
            errorCode = 406;
            throw new Error("Algum parâmetro está vazio ou incorreto, verifique novamente."); 
        }
        if( typeof age !== "number" ){
            errorCode = 401;
            throw new Error("Age deve ser um Number.");
        }

        Users.push({
            id: Users.length + 1,
            name: name, 
            email: email,
            type: typeUpper,
            age: age
        })
        res.status(200).send(Users)
        
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
    
})
//Get User By Type
app.get("/users/type", (req: Request, res: Response) => {
    let errorCode = 500;
    try{
        const type = req.query.type as string
        const typeUpper = type.toUpperCase()

        if(typeUpper !== USER_TYPES.ADMIN && typeUpper !== USER_TYPES.NORMAL){
            errorCode = 422;
            throw new Error("O parametro type deve ser 'ADMIN' ou 'NORMAL'");        
        };
        const filteredType = Users.filter(
            (u) => u.type === typeUpper
        );

        if(!filteredType.length){
            errorCode = 404;
            throw new Error("Nenhum usuário cadastrado com este type");
            
        }

        
        res.status(200).send(filteredType)
    }
    catch(error: any){
        res.status(errorCode).send(error.message);
    }
})
//Get User By Name 
app.get("/users/name", (req: Request, res: Response) => {
    let errorCode = 0
    try{
        const name = req.query.name as string
        const nameLower = name.toLowerCase()

        if(!name){
            errorCode = 422;
            throw new Error("Deve ser passado um nome!");   
        }

        const filteredUser = Users.filter(
            (u) => u.name.toLowerCase() === nameLower );

           if(!filteredUser.length){
               errorCode = 404;
               throw new Error("Nome de usuário incorreto ou inexistente!");
               
           }
           res.status(200).send(filteredUser)
        }
    catch(error: any){
        res.status(errorCode).send(error.message);
    }
})
//Update User Detail
app.put("/user/update/:id", (req: Request, res: Response) => {
    let errorCode = 500;
    try {
        const id = Number(req.params.id);
        const name = req.body.name;
        
        if (isNaN(id)) {
            throw new Error("Id inválido");
          }

        Users.forEach((detail)=> {
            if(detail.id === id){
              return detail.name = name
            }
        })
        res.status(200).send(Users);
    } catch (error: any) {
        res.status(errorCode).send(error.message);
    }
})
//Delete User
app.delete("/user/delete/:id", (req: Request, res: Response) => {
    let errorCode = 500;
    try { 
        const id = Number(req.params.id)

        // if(!id){
        //     errorCode= 404;
        //     throw new Error("Deve ser passado um ID!");
        // }

        Users.forEach((user, i) => {
            if(id === user.id){
               Users.splice(i, 1)
            }
            res.status(200).send(Users)
        })
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})