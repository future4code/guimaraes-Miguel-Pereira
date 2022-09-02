import { UserBusiness } from "../business/UserBusiness";
import { Request, Response } from "express";
import { UserInputDTO, UserLogin } from "../model/UserModel";

export class UserController {

    private userBusiness: UserBusiness
    constructor(){
        this.userBusiness = new UserBusiness
    } 
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
    };

    public getCurrentProfile = async (req: Request, res: Response): Promise<void> => {
    try {
        const token = req.headers.authorization as string
        const result = await this.userBusiness.getCurrentProfile(token)

        res.status(200).send(result)
    } catch (error: any) {
        res.status(400).send(error.message);
    }
    };

    public getProfileById = async (req: Request, res: Response): Promise<void> => {
        try {
            const token = req.headers.authorization as string
            const id = req.params.id as string
            const input = {id, token}
            const result = await this.userBusiness.getProfileById(input)
    
            res.status(200).send(result)
        } catch (error: any) {
            res.status(400).send(error.message);
        }
        };

    public getAllUsers = async (req: Request, res: Response) => {
        try {
            const users = await this.userBusiness.getAllUsers()

            res.status(200).send(users)
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    }
}