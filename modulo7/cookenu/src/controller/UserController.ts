import { UserBusiness } from "../business/UserBusiness";
import { Request, Response } from "express";
import { UserInputDTO, UserLogin } from "../model/UserModel";

export class UserController {

    public signup = async(req: Request, res: Response ): Promise<void> => {
        try {
            let { email, name, password} = req.body

            const userInput: UserInputDTO = {
                name,
                email,
                password
            }
            const userBusiness = new UserBusiness();
            const token = await userBusiness.signup(userInput)

            res.status(201).send({message: "Cadastrado com sucesso!", token})
        } catch (error: any) {
            res.status(400).send(error.message || error.sqlMessage);
        }
    };

    public login = async(req: Request, res: Response) => {
        try {
            const { email, password } = req.body;

            const input: UserLogin = {
                email,
                password
            };

            const userBusiness = new UserBusiness();
            const token = await userBusiness.login(input);

            res.status(200).send({token})
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    }
}