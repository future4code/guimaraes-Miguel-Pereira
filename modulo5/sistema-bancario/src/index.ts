import { app } from "./app"
import { Users } from "./data"
import { Request, Response } from "express"
import { send } from "process"
import { userInfo } from "os"
import { cp } from "fs"

// app.get("/ping", (req: Request, res: Response) => {
//     res.send("Pong! 🏓")
// })
//Get All Users
app.get("/users", (req: Request, res: Response) => {
    let errorCode = 500;
    try{
        if(!Users.length){
            errorCode = 404
            throw new Error("Nenhum usuário encontrado!");    
        }
        res.status(200).send(Users)
    }
    catch(error: any){  
        res.status(errorCode).send(error.message)
    }
})
//Create User
app.post("/user/create", (req: Request, res: Response) => {
    let errorCode = 500;
    try {
        const {name, birth, cpf} = req.body;
        const id = Math.round(Math.random() * (51 - 1 ) + 1)
        
        const currentYear = new Date().getFullYear();
        const splittedBirth = birth.split("/");
        const userBirthYear = Number(splittedBirth[2])

        const userAge = Number(currentYear - userBirthYear);
        
        if(!name || !birth || !cpf){
            errorCode = 406;
            throw new Error("Algum parâmetro está vazio ou incorreto, verifique novamente."); 
        }
        if(typeof name !== "string"){
            errorCode = 406;
            throw new Error("o nome esta sendo passado incorretamente");
        }
        if(userAge >= 18) {
            Users.push({
                id: id,
                name: name,
                cpf: cpf,
                birth: birth,
                balance: 0,
                bankStatement: [{
                    value: 0,
                    date: "",
                    description: ""
                    }]
                })
                res.status(200).send("Usuário criado com sucesso")
            } else{
                errorCode = 401
                throw new Error("O usário deve ter no mínimo 18 anos.");
            }
        } catch (error: any) {    
            res.status(errorCode).send(error.message)
    }})
//Delete User
app.delete("/user/delete/:id", (req: Request, res: Response) => {
    let errorCode = 500;
    try {
        const id = Number(req.params.id);

        if (isNaN(id)) {
            errorCode = 406;
            throw new Error("Id inválido");
          };
      

        Users.forEach((user, i) => {
            if( id === user.id){
                Users.splice(i, 1)
            }
            res.status(200).send("usuário deletado!")
        })
        //     if(!id){
        //     errorCode = 404;
        //     throw new Error("Usuário não encontrado.");
        //   }
        } catch (error: any) { 
            res.status(errorCode).send(error.message)
    }})
//Get Balance
app.get("/user/balance/:cpf", (req, res) => {
    let errorCode = 500;
    try {
        const cpf = Number(req.params.cpf)

        const balanceUser = Users.filter((info) => {
            if ( cpf === info.cpf ){
                return info.balance
        }})
        res.status(200).send(balanceUser)
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }})
//Pay Debit
app.put("/user/balance/pay/:id", (req, res) => {
    let errorCode = 500;
    try {  
        
    } catch (error: any) {
        
    }
})
//Add Balance
app.put("/user/:name/balance/update/:cpf", (req, res) => {
    let errorCode = 500;
    try {
        const {name} = req.params
        const {cpf} = req.params
        const {balance} = req.body

        Users.forEach((user) =>{
            if(user.name === name && user.cpf === cpf){
                return balance + user.balance
            }
        })
        res.status(200).send(Users)
        
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})
//Trasnference

