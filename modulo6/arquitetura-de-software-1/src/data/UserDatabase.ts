import { UserInfo } from "../types/UserType";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

  createUser = async (
        id: string,
        email: string,
        name: string,
        password: string
      ): Promise<void> => {
        try {
          await BaseDatabase.connection('User_Arq')
            .insert({
              id,
              email,
              name,
              password
            })
        } catch (error:any) {
          throw new Error(error.sqlMessage || error.message);
        }
      }
      getAllUsers = async (): Promise<any> => {
        try {
          const users: UserInfo[] = [];
          const result = await UserDatabase.connection("User_Arq")
          .select();

          for (let user of result) {
            users.push(user);
          }
          return users;
        } catch (error: any) {
          throw new Error(error.sqlMessage || error.message);
        }
      }
    deleteUser = async (id: string): Promise<void> =>{
      try {
        await UserDatabase.connection("User_Arq")
        .delete()
        .where({id: id})

      } catch (error: any) {
        throw new Error(error.sqlMessage || error.message);
      }
    }
  };
