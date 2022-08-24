import { UserBusiness } from "../business/UserBusiness";
import {Request, Response} from "express";
import { generateId } from "../services/GenerateId";

export class UserController extends UserBusiness {

    createNewUser = async (req: Request, res: Response): Promise<void> => {
        let message = "Sucess!"
        try {
            const input = {
                id: generateId(),
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            await new UserBusiness().createUser(input);

            res.status(201).send({ message })
        
        } catch (error: any) {
            res.send(error.sqlMessage || error.message);
        }
    }
}