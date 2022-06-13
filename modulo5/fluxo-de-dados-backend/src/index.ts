import { Request, Response } from "express"
import { app } from "./app"
import { Products } from "./data"
import { v4 as generateId} from "uuid"
import { send } from "process"
import { type } from "os"

// 404 - Favor, passar name e/ou price
// 403 - Name deve ser uma String
// 403 - Price deve ser um Number
// 406 - Price não pode ser igual ou menor que 0 

// app.get("/ping", (req: Request, res: Response) => {
//     res.send("Pong! 🏓")
// }) 

const errors = {
    //Erros de Create
    PARAMS_NOT_FOUND: { status: 404, message: "Favor, passar name e/ou price"},
    NAME_FORBBIDEN: { status: 403, message: "Name deve ser uma String"},
    PRICE_FORBBIDEN: { status: 403, message: "Price deve ser um Number"},
    PRICE_NOT_ACCEPTABLE: { status: 406, message: "Price não pode ser igual ou menor que 0"},
    GENERIC_ERROR: {status: 500, message: "Algo deu errado!"},
    PRODUCT_NOT_FOUND: {status: 404, message: "Produto não encontrado"},
    PRICE_NOT_FOUND: { status: 404, message: "Favor, passar o valor de price"},
}
//Get All Products
app.get("/products", (req: Request, res: Response)=> {
    res.status(200).send(Products)
})
//Create Product
app.post("/product/create", (req: Request, res: Response)=> {  
    try{
        const id = (Math.round(Math.random() * (51 - 1) + 1)).toString();
        const name = req.body.name
        const price = req.body.price

        if(!name || !price){
            throw new Error(errors.PARAMS_NOT_FOUND.message)
        }
        if(typeof name !== "string"){
            throw new Error(errors.NAME_FORBBIDEN.message)
        }
        if(typeof price !== "number"){
            throw new Error(errors.PRICE_FORBBIDEN.message)
        }
        if(price <= 0){
            throw new Error(errors.PRICE_NOT_ACCEPTABLE.message)
        }
        

        Products.push({
            id: id,
            name: name,
            price: price
        })
        res.status(201).send(Products)
    }
    catch(error: any){
        switch(error.message){
            case errors.PARAMS_NOT_FOUND.message :
                res.status(errors.PARAMS_NOT_FOUND.status).send(errors.PARAMS_NOT_FOUND.message)
                break;
            case errors.NAME_FORBBIDEN.message : 
                res.status(errors.NAME_FORBBIDEN.status).send(errors.NAME_FORBBIDEN.message)
                break;
            case errors.PRICE_FORBBIDEN.message:
                res.status(errors.PRICE_FORBBIDEN.status).send(errors.PRICE_FORBBIDEN.message)
                break;
            case errors.PRICE_NOT_ACCEPTABLE.message:
                res.status(errors.PRICE_NOT_ACCEPTABLE.status).send(errors.PRICE_NOT_ACCEPTABLE.message)
                break;
            default: res.status(errors.GENERIC_ERROR.status).send(errors.GENERIC_ERROR.message)
        }
    }
})
//Edit Price
app.put("/product/edit/:id", (req: Request, res: Response)=> {
    try{
        const id = req.params.id;
        const price = req.body.price;

        if(!price){ 
            throw new Error(errors.PRICE_NOT_FOUND.message)
        }
        if(typeof price !== "number"){
            throw new Error(errors.PRICE_FORBBIDEN.message)
        }
        if(price <= 0){
            throw new Error(errors.PRICE_NOT_ACCEPTABLE.message)
        }
        // if( req.params.id !== id ) {
        //     throw new Error(errors.PRODUCT_NOT_FOUND.message);            
        // }

        Products.forEach((change)=> {
            if( id === change.id ){
                change.price = price;
            }
        })
        res.status(200).send(Products)
    }
    catch(error: any){
        switch(error.message){
            case errors.PRICE_NOT_FOUND.message:
                res.status(errors.PRICE_NOT_FOUND.status).send(errors.PRICE_NOT_FOUND.message)
                break;
            case errors.PRICE_FORBBIDEN.message:
                res.status(errors.PRICE_FORBBIDEN.status).send(errors.PRICE_FORBBIDEN.message)
                break;
            case errors.PRICE_NOT_ACCEPTABLE.message:
                res.status(errors.PRICE_NOT_ACCEPTABLE.status).send(errors.PRICE_NOT_ACCEPTABLE.message)
                break;
            // case errors.PRODUCT_NOT_FOUND.message:
            //     res.status(errors.PRODUCT_NOT_FOUND.status).send(errors.PRODUCT_NOT_FOUND.message)
            //     break;
            default: res.status(errors.GENERIC_ERROR.status).send(errors.GENERIC_ERROR.message)
        }
    }
})
//Delete Product
app.delete("/product/delete/:id", (req: Request, res: Response)=> {
    const id = req.params.id

    try{
        Products.forEach((del, i) => {
            if( id === del.id ){
                Products.splice(i, 1)
            }
            res.status(200).send(Products)

        })
    }
    catch{

    }
})