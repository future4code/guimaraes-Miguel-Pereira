import { UserDatabase } from "../data/UserDatabase"
import { GenerateId } from "../services/generateId"
import { User } from "../types/user"
import { UserDTO } from "../types/userDTO"

export class UserBusiness {
  //Create User
  async create(input: UserDTO): Promise<void> {
    const { email, name, password } = input

    if (!email || !name || !password) {
      throw new Error("Dados inválidos (email, name, password).")
    }

    if (!email.includes('@')) {
      throw new Error("O email deve possuir '@'.");
    }

    if(name.length < 4) {
      throw new Error("O nome deve ter no mínimo 4 caracteres.");
    }

    const id = GenerateId()

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
