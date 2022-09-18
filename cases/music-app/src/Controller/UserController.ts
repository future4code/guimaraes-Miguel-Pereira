import { Request, Response } from "express";
import { UserBusiness } from "../Business/UserBusiness";
import { UserInputDTO, LoginInputDTO, EditUserInputDTO } from "../Models/User";
import { CustomError } from "../Errors/CustomError";

export class UserController {
    private userBusiness: UserBusiness
    constructor(){
        this.userBusiness = new UserBusiness();
    };

    public signup = async(req: Request, res: Response): Promise<void> => {
        try {
            const input: UserInputDTO = {
                email: req.body.email, 
                name: req.body.name, 
                password: req.body.password, 
                role: req.body.role?.toUpperCase()
            };

            const token = await this.userBusiness.signup(input);

            res.status(200).send({message: "Usuário cadastrado!", token});
        } catch (error: any ) {
            res.status(400).send(error.message);
        }
    };

    login = async (req: Request, res: Response): Promise<void> => {
        try {
            const { email, password } = req.body;

            const input: LoginInputDTO = {
                email,
                password
            };

            const token = await this.userBusiness.login(input);

            res.status(200).send({token})
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    };

    editUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const { name, email, password, role} = req.body
            const { id } = req.params
            const token = req.headers.authorization as string

            const input = {name, email, password, role, id}

            await this.userBusiness.editUser(input, token)

            res.sendStatus(200).send("Dado(s) alterado(s).")
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    };
}