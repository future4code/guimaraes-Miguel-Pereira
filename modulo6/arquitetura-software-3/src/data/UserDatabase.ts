import { BaseDatabase } from "./BaseDatabase";
import { User } from "../model/user";

export class UserDatabase extends BaseDatabase {
  private TABLE_NAME = "LABEFLIX_USER";

  //Create User
  public create = async ({ id, name, email, password }: any): Promise<void> => {
    try {
      await UserDatabase.connection(this.TABLE_NAME)
      .insert({
        id,
        name,
        email,
        password,
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage);
    }
  };
//Get All Users
  async getUser(): Promise<User[]> {
    try {
      const result = await UserDatabase.connection(this.TABLE_NAME)
    .select('*')

    return result
    } catch (error: any) {
      throw new Error(error.sqlMessage);
    }
  };
}
