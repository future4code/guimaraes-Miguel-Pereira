import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserDTO } from "../model/userDTO";
import { CustomError } from "../error/customError";

export class UserController {
  //Create User
  public create = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, name, password } = req.body;

      const input: UserDTO = {
        name,
        email,
        password
      }

      const userBusiness = new UserBusiness();
      await userBusiness.create(input);

      res.status(201).send({ message: "Usuário cadastrado com sucesso!" });
    } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message);
    }
  };
  //Get All Users
  async getUser(req: Request, res: Response): Promise<void> {
    try {
      const users = await new UserBusiness().getAllUsers();

      res.status(200).send(users)
    } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message);
    }
  }
}