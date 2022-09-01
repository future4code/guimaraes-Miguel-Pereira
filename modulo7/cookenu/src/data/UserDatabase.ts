import { User, UserInputDTO } from "../model/UserModel";
import { BaseDatabase } from "./BaseDatabase";


export class UserDatabase extends BaseDatabase {
    private USER_TABLE = 'cookenu_users'
    
    public create = async (user: User) => {
        await UserDatabase.connection(this.USER_TABLE)
        .insert({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password
        }
        )
    }
}