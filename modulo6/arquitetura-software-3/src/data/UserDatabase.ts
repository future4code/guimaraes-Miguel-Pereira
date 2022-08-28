import { BaseDatabase } from "./BaseDatabase";
import { User } from "../types/user";

export class UserDatabase extends BaseDatabase {
  protected static TABLE_NAME = "LABEFLIX_USER";
  //Create User
  async create({ id, name, email, password }: any): Promise<void> {
    await UserDatabase.connection
      .insert({
        id,
        name,
        email,
        password,
      })
      .into(UserDatabase.TABLE_NAME);
  };
//Get All Users
  async getUser(): Promise<User[]> {
    const result = await UserDatabase.connection(UserDatabase.TABLE_NAME)
    .select('*')

    return result
  };
}
