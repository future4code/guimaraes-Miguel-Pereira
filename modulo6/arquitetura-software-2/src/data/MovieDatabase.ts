import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_MOVIE";
  //Create Movie
  async create({ id, name, email, password }: any): Promise<void> {
    await MovieDatabase.connection
      .insert({
        id,
        name,
        email,
        password,
      })
      .into(MovieDatabase.TABLE_NAME);
  };
}