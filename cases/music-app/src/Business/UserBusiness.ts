import Authenticator from "../Services/Authenticator";
import HashPassword from "../Services/HashPassword";
import IdGenerator from "../Services/GeneratorId";
import { UserDatabase } from "../Database/UserDatabase";
import { EditUserInputDTO, LoginInputDTO, User, UserInputDTO, UserRole } from "../Models/User";
import { CustomError } from "../Errors/CustomError";
import { EmailAlreadExistis, EmptyParams, InvalidAuthorization, InvalidEmailFeature, ShortName, UserNotFound } from "../Errors/UserErrors";
import { InvalidLogin, InvalidEmail, InvalidPassword } from "../Errors/UserErrors";
import { AuthenticationData } from "../Models/AuthenticationData";

const idGenerator = new IdGenerator();
const authenticator = new Authenticator();
const hashPassword = new HashPassword();

export class UserBusiness {
    private userDB: UserDatabase
    constructor() {
        this.userDB = new UserDatabase();
    };

    //Cadastro
    //( Acesso público )
    signup = async (input: UserInputDTO): Promise<string> => {
        try {
            let { name, email, password, role } = input;
            const id: string = idGenerator.generateId();
            const hash = await hashPassword.generateHash(password);
            const verifyEmail = await this.userDB.getUserByEmail(email)

            if (!name || !email || !password) {
                throw new EmptyParams();
            };
            if (verifyEmail) {
                throw new EmailAlreadExistis()
            };
            if (!email.includes("@")) {
                throw new InvalidEmailFeature();
            };
            if (name.length < 4) {
                throw new ShortName();
            };
            if (role !== "ADMIN" && role !== "USER") {
                role = UserRole.USER
            };

            const user: User = {
                id,
                name,
                email,
                password: hash,
                role
            };

            await this.userDB.insertUser(user);

            const token = authenticator.generateToken({ id, role });

            return token;
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    };

    //Login
    //( Acesso público )
    login = async (input: LoginInputDTO): Promise<string> => {
        try {
            const { email, password } = input;

            if (!email || !password) {
                throw new InvalidLogin();
            };

            const user = await this.userDB.getUserByEmail(email)
            const hashCompare = await hashPassword.compareHash(password, user.password)

            if (!user) {
                throw new InvalidEmail();
            };
            if (!hashCompare) {
                throw new InvalidPassword();
            };

            const payload: AuthenticationData = { id: user.id, role: user.role }
            const token = authenticator.generateToken(payload)

            return token;
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    };

    //Pegar Todos os Usuários
    //(Acesso de ADMIN)
    getAllUsers = async (token: string): Promise<void> => {
        try {
            const tokenData = await authenticator.getTokenData(token)

            if (tokenData.role !== UserRole.ADMIN) {
                throw new InvalidAuthorization();
            };

            const result = await this.userDB.getAllUsers()

            if (!result.length) {
                throw new Error("Nenhum usuário encontrado");
            }

            return result;
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    };

    //Criar um Novo Usuário
    //(Acesso de ADMIN)
    createUser = async (input: UserInputDTO, token: string): Promise<void> => {
        try {
            let { name, email, password, role } = input;
            const tokenData = await authenticator.getTokenData(token)
            const id: string = idGenerator.generateId();
            const hash = await hashPassword.generateHash(password);
            const verifyEmail = await this.userDB.getUserByEmail(email)

            if (tokenData.role !== UserRole.ADMIN) {
                throw new InvalidAuthorization();
            };
            if (!name || !email || !password || !role) {
                throw new EmptyParams();
            };
            if (verifyEmail) {
                throw new EmailAlreadExistis()
            };
            if (!email.includes("@")) {
                throw new InvalidEmailFeature();
            };
            if (name.length < 4) {
                throw new ShortName();
            };

            const user: User = {
                id,
                name,
                email,
                password: hash,
                role
            };

            await this.userDB.insertUser(user);
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    };

    //Editar um Usuário
    //(Acesso de ADMIN)
    editUser = async (input: EditUserInputDTO, token: string): Promise<void> => {
        try {
            let { id, name, email, password, role } = input;
            const tokenData = await authenticator.getTokenData(token);
            const verifyUser = await this.userDB.getUserById(id);
            // const hash = await hashPassword?.generateHash(password)

            if (tokenData.role !== UserRole.ADMIN) {
                throw new InvalidAuthorization();
            };
            if (!verifyUser) {
                throw new UserNotFound();
            };
            if (email) {
                if (!email.includes("@")) {
                    throw new InvalidEmailFeature();
                }
            };

            if (name) {
                if (name.length < 4) {
                    throw new ShortName();
                }
            };
            ///Não está salvando a senha com hash no banco de dados
            // if (password) {
            //     let hash = await hashPassword.generateHash(password)
            //     password === hash
            // };

            await this.userDB.editUser(input);
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    };

    //Deletar Usuário
    //(Acesso de ADMIN)
    deleteUser = async (input: string, token: string): Promise<void> => {
        try {
            const tokenData = await authenticator.getTokenData(token)
            const verifyUser = await this.userDB.getUserById(input)
            if (tokenData.role !== UserRole.ADMIN) {
                throw new InvalidAuthorization();
            };
            if (!verifyUser) {
                throw new UserNotFound();
            };

            await this.userDB.deleteUser(input);
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    };
}