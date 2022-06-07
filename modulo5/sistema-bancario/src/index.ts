import { app } from "./app"
import { Users } from "./user"
import { Request, Response } from "express"

// app.get("/ping", (req: Request, res: Response) => {
//     res.send("Pong! 🏓")
// })
//Get All Users
app.get("/users", (req: Request, res: Response) => {
    res.status(200).send(Users)
})
//Create User
app.post("/user/create", (req: Request, res: Response) => {
    const id = Math.round(Math.random() * (51 - 1 ) + 1)
    const name = req.body.name
    const cpf = req.body.cpf
    const birth = req.body.birth
    const balance = req.body.balance

    Users.push({
        id: id,
        name: name,
        cpf: cpf,
        birth: birth,
        balance: balance,
})

    res.status(200).send(Users)
})
//Get Balance
app.get("/user/balance/:id", (req, res) => {
    const id = Number(req.params.id)
    const returnBalance = Users.filter((info) => {
        if ( id === info.id ){
            return info.balance
        }
    })

    res.status(200).send(returnBalance)

})
//Pay Debit
app.put("/user/balance/pay:id", (req, res) => {

})
//Add Balance
app.put("/user/balance/update/:id", (req, res) => {

})
//Trasnference

