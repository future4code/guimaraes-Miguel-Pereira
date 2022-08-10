import { UserDataBase } from "../database/UserDatabase";
import { generateId } from "../services/GenerateId";
import { user } from "../types/UserType";

export class UserBusiness {
    createUser = async (user: user ): Promise<void> => {
        let statusCode = 400
        try {
            if (!user.name || !user.email || !user.password) {
                // statusCode = 406
                const message = '"name", "email" and "password" must be provided'
                throw new Error(message)
             }

             const id = generateId();

             await new UserDataBase().createUser(
                id, 
                user.email, 
                user.name,
                user.password)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}