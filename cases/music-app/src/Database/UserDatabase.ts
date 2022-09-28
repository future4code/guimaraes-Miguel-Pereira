import { BaseDatabase } from "./BaseDatabase";
import { EditUserInputDTO, User } from "../Models/User";

export class UserDatabase extends BaseDatabase {
    private TABLE_NAME: string = "Music_User";

    //Pegar usuário pelo ID
    //( Consulta ao banco )
    public getUserById = async (id: string): Promise<User> => {
        try {
            const result = await UserDatabase.connection(this.TABLE_NAME)
                .select()
                .where({ id })

            return result[0]
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage);
        }
    };

    //Pegar usuário pelo Email
    //( Consulta ao banco )
    public getUserByEmail = async (email: string): Promise<User> => {
        try {
            const result = await UserDatabase.connection(this.TABLE_NAME)
                .select()
                .where({ email })

            return result[0]
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage);
        }
    };

    //Pegar usuário por algum parâmetro
    //( Consulta ao banco )
    public getUserByParam = async (param: string): Promise<void> => {
        try {
            const result = await UserDatabase.connection(this.TABLE_NAME)
            .select()
            .where({param})
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage);
        }
    };

    //Pega todos os usuários do banco de dados
    public getAllUsers = async (): Promise<any> => {
        try {
            const result = await UserDatabase.connection(this.TABLE_NAME)
                .select("*")
                .orderBy("name")

            return result
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage);
        }
    };

    //Insere os dados do usuário no banco de dados.  ( Role vem como USER por padrão ) 
    public insertUser = async ({ id, name, email, password, role }: User): Promise<void> => {
        try {
            await UserDatabase.connection(this.TABLE_NAME)
                .insert({ id, name, email, password, role })

        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage);
        }
    };

    //Edita os dados do usuário no banco de dados a partir de um ID   
    public editUser = async (input: EditUserInputDTO): Promise<{}> => {
        try {
            const result = await UserDatabase.connection(this.TABLE_NAME)
                .update({
                    name: input.name,
                    email: input.email,
                    password: input.password,
                    role: input.role
                })
                .where({ id: input.id })

            return result


        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage);
        }
    };

    //Deleta um usuário do banco de dados a partir do seu ID 
    public deleteUser = async (id: string): Promise<void> => {
        try {
            await UserDatabase.connection(this.TABLE_NAME)
                .delete()
                .where({ id })

        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage);
        }
    };

};