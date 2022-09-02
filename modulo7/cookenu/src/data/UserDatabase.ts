import { CustomError } from "../error/CustomError";
import { User, UserInputDTO } from "../model/UserModel";
import { BaseDatabase } from "./BaseDatabase";


export class UserDatabase extends BaseDatabase {
    private USER_TABLE = 'cookenu_users'
    
    public create = async (user: User) => {
        try {
            await UserDatabase.connection(this.USER_TABLE)
            .insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            }
            )
        } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    
    };

    public findUserByEmail = async (email: string): Promise<User> => {
        try {
            const result = await UserDatabase.connection(this.USER_TABLE)
            .select()
            .where({email})

            return result[0];
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    };

    public findUserById = async (id: string) => {
        try {
            const result = await UserDatabase.connection(this.USER_TABLE)
            .select()
            .where({id})

            return result[0];
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    };

    getProfileById = async (id: string) => {
        try {
            const result = await UserDatabase.connection(this.USER_TABLE)
        .select("id", "name", "email")
        .where({id})

        return result[0];
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    };

    getAllUsers = async () => {
        try {
            const result = await UserDatabase.connection(this.USER_TABLE)
            .select()
            .orderBy("name")

            return result
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }


}