import { UserBusiness } from '../business/UserBusiness'
import { Request, Response } from 'express';
import { UserInfo } from '../types/UserType';
import { v4 as generateId } from 'uuid';

export class UserController extends UserBusiness {


    createUSer = async (req: Request, res: Response): Promise<void> => {


        try {
            const input = {
                id: generateId(),
                email: req.body.email,
                name: req.body.name,
                password: req.body.password
            }

            await new UserBusiness().createUser(input);

            res.status(201).send({ message: "User created" });

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    getAllUser = async (req: Request, res: Response): Promise<any> => {
        try {
          const userBusiness = new UserBusiness();
          const showUsers = await userBusiness.getAllUsers();

          res.status(200).send(showUsers);
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
      };
    deleteById = async(req: Request, res: Response): Promise<any> => {
        try {
            const input = {
              id: req.params.id,
            };
      
            const userBusiness = new UserBusiness();
            await userBusiness.deleteUser(input);
            res.status(200).send({ message: "User successfully deleted." });
          } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
          }
        };
    }