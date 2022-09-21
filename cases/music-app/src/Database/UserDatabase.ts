import { BaseDatabase } from "./BaseDatabase";
import { EditUserInputDTO, User, UserRole } from "../Models/User";
import { AuthenticationData } from "../Models/AuthenticationData"

export class UserDatabase extends BaseDatabase {
    private TABLE_NAME: string = "Music_User";

    public insertUser = async ({ id, name, email, password, role }: User): Promise<void> => {
        try {
            await UserDatabase.connection(this.TABLE_NAME)
            .insert({ id, name, email, password, role })

        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage);
        }
    };

    public getUserByEmail = async (email: string): Promise<User> => {
        try {
            const result = await UserDatabase.connection(this.TABLE_NAME)
            .select()
            .where({email})
        
            return result[0]
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage);
        }
    };

    public editUser = async (input: EditUserInputDTO, token: AuthenticationData): Promise<{}> => {
        try {
          const result = await UserDatabase.connection(this.TABLE_NAME)
          .update({
            name: input.name,
            email: input.email,
            password: input.password,
            role: input.role
          })  
          .where({id: input.id})
        //   .andWhere("role","like", token.role as string)
        //   console.log(result)
          return result
          

        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage);
        }
    }
};