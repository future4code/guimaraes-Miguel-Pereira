import { BaseDatabase } from "./BaseDatabase";
import { User, UserRole } from "../Models/User";
import { CustomError } from "../Errors/CustomError";

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
            console.log(result)
            return result[0]
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage);
        }
    };
};