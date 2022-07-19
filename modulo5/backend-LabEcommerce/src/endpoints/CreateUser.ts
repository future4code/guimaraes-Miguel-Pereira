import { Request, Response } from "express";
import { v4 as generateId } from 'uuid'
import { User } from "../data/types";
import { createNewUser } from "../data/functions";
import trasporter from "../services/mailTrasporter";

const createUser = async (req: Request, res: Response): Promise<void>  => {
    let errorCode = 400
    try {
        let { name, email, password } = req.body

        if(!name || !email || !password){
            errorCode = 406
            throw new Error("Algum parâmetro não foi preenchido corretamente!");  
        };
        
        const newUser: User = {
            id: generateId(),
            name,
            email,
            password
            }
        await createNewUser( newUser );
        
        await trasporter.sendMail({
            from: process.env.NODEMAILER_USER,
            to: email,   
            subject: "Confirmação de cadastro.",   
            html: `<p>Olá ${name}, sua conta em Labecommerce foi criada com sucesso!</p>`
        })
        res.status(201).send('Usuário criado!');
    } catch (error: any) {
        res.status(errorCode).end(error.message || error.sqlMessage);
    }
}
export default createUser;
