import { BaseDatabase } from "./BaseDatabase";

export class UserDataBase extends BaseDatabase {
    private userTable = 'labook_users'

    createUser = async (
        id: string,
        name: string,
        email: string,
        password: string
    ): Promise <void> => {
        try {
            await UserDataBase.connection(this.userTable)
            .insert({
                id,
                name,
                email,
                password
            })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}