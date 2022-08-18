import { UserDatabase } from "../data/UserDatabase"
import { v4 as generateId } from 'uuid'
import { User } from "../types/User"

export class UserBusiness {
  //Create User
  async create(input: any): Promise<void> {
    const { email, name, password } = input

    if (!email || !name || !password) {
      throw new Error("Dados inválidos (email, name, password)")
    }

    const id = generateId()

    const userDatabase = new UserDatabase()
    await userDatabase.create({
      id,
      name,
      email,
      password
    })
  }
  //Get All Users
  async getAllUsers(): Promise<User[]> {
    const userDB = new UserDatabase();
    return await userDB.getUser();
  }

}
