import { UserInfo } from '../types/UserType';
import { UserDatabase } from '../data/UserDatabase';
import { v4 as generateId } from 'uuid';

export class UserBusiness {
    createUser = async (user: UserInfo): Promise<void> => {

        try {

            if (!user.name || !user.email || !user.password) {
                throw new Error("Please fill all the fields");
            }

            if (user.email.indexOf("@") === -1) {
                throw new Error("Invalid Email");
            }

            if (user.password.length < 6) {
                throw new Error("Password must have at least 6 characters");
            }

            const id = generateId();

            await new UserDatabase().createUser(id, user.email, user.name, user.password);


        } catch (error: any) {
            throw new Error(error.message || "Error creating user. Please check your system administrator.");
        }
    };

    getAllUsers = async (): Promise<any> => {
        try {
          return await new UserDatabase().getAllUsers();
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
      };
    deleteUser = async (input: { id:string }): Promise<void> =>{
        try {
            if (!input.id) {
                throw new Error("Missing 'id' parameter. Please try again.");
              }
              const userDataBase = new UserDatabase();
              return await userDataBase.deleteUser(input.id);
            } catch (error: any) {
              throw new Error(error.message);
            }
    }
}
