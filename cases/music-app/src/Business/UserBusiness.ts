import Authenticator from "../Services/Authenticator";
import HashPassword from "../Services/HashPassword";
import IdGenerator from "../Services/GeneratorId";
import { UserDatabase } from "../Database/UserDatabase";
import { EditUserInputDTO, LoginInputDTO, User, UserInputDTO, UserRole } from "../Models/User";
import { CustomError } from "../Errors/CustomError";
import { EmailAlreadExistis, EmptyParams, InvalidEmailDetail, ShortName } from "../Errors/SignupErrors";
import { InvalidLogin, InvalidEmail, InvalidPassword } from "../Errors/LoginErrors";
import { AuthenticationData } from "../Models/AuthenticationData";

const idGenerator = new IdGenerator();
const authenticator = new Authenticator();
const hashPassword = new HashPassword();

export class UserBusiness {
    private userDB: UserDatabase
    constructor(){
        this.userDB = new UserDatabase();
    };

    signup = async (input: UserInputDTO): Promise<string> => {
        try {
            let {name, email, password, role} = input;
            const id: string = idGenerator.generateId();
            const hash = await hashPassword.generateHash(password);
            const verifyEmail = await this.userDB.getUserByEmail(email)

            if(!name || !email || !password){
                throw new EmptyParams();
            };

            if(verifyEmail){
                throw new EmailAlreadExistis()
            };

            if(!email.includes("@")){
                throw new InvalidEmailDetail();
            };

            if(name.length < 4){
                throw new ShortName();
            };

            if(role !== "ADMIN" && role !== "USER"){
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

            const token = authenticator.generateToken({id, role});

            return token;
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    };

    login = async (input: LoginInputDTO): Promise<string> => {
        try {
            const {email, password} = input;

            if(!email || !password){
                throw new InvalidLogin();
            };

            const user = await this.userDB.getUserByEmail(email)
            const hashCompare = await hashPassword.compareHash(password, user.password)

            if(!user){
                throw new InvalidEmail();
            };

            if(!hashCompare){
                throw new InvalidPassword();  
            };

            const payload: AuthenticationData = {id: user.id, role: user.role}
            const token = authenticator.generateToken(payload)
            
            return token;
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    };

    editUser = async (input: EditUserInputDTO, token: string): Promise<any> => {
      try {
        const {name, email, password, role} = input;
        const tokenData = authenticator.getTokenData(token)
        // const userExists = await this.userDB.getUserByEmail(email)

        // if(!userExists){
        //     throw new Error("Usuário não encontrado.");
        // };
        if(tokenData.role !== UserRole.ADMIN){
            throw new Error("Acesso não autorizado.");
        };
        if(!email?.includes("@")){
            throw new InvalidEmailDetail();
        };
        if(name?.length < 4){
            throw new ShortName();  
        };

        const result = await this.userDB.editUser(input, tokenData)
        return result;
      } catch (error: any) {
        throw new CustomError(error.statusCode, error.message);
      }  
    };
}