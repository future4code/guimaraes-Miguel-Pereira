import { UserDatabase } from "../data/UserDatabase"
import { GenerateId } from "../services/generateId"
import { User } from "../model/user"
import { UserDTO } from "../model/userDTO"
import { InvalidRequest } from "../error/userErrors/invalidRequest"
import { CustomError } from "../error/customError"
import { InvalidEmail } from "../error/userErrors/invalidEmail"
import { ShortName } from "../error/userErrors/shortName"

export class UserBusiness {
  //Create User
  public create = async(input: UserDTO): Promise<void> => {
    try {
      const { email, name, password } = input

      if (!email || !name || !password) {
        throw new InvalidRequest()
      };

      if (!email.includes('@')) {
        throw new InvalidEmail();
      };

      if (name.length < 4) {
        throw new ShortName();
      };

      const id = GenerateId()

      const userDatabase = new UserDatabase()
      await userDatabase.create({
        id,
        name,
        email,
        password
      })

    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  //Get All Users
  public getAllUsers = async (): Promise<User[]> => {
    try {
      const userDB = new UserDatabase();
      
      return await userDB.getUser();

    } catch (error: any) {
      throw new CustomError(error.message || error.sqlMessage, error.statusCode);
    }
  }
}
