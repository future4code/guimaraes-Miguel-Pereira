import Authenticator from "../Services/Authenticator";
import HashPassword from "../Services/HashPassword";
import IdGenerator from "../Services/GeneratorId";
import { UserDatabase } from "../Database/UserDatabase";
import { LoginInputDTO, User, UserInputDTO, UserRole } from "../Models/User";
import { CustomError } from "../Errors/CustomError";
import { EmptyParams, InvalidEmail, ShortName } from "../Errors/SignupErrors";

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

            if(verifyEmail){
                throw new Error("Email já cadastrado")
            };

            if(role !== "ADMIN" && role !== "USER"){
                role = UserRole.USER
            };

            if(!email.includes("@")){
                throw new InvalidEmail();
            };

            if(name.length < 4){
                throw new ShortName();
            };

            if(!name || !email || !password){
                throw new EmptyParams();
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

            const tt = ""
            return tt
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    };
}