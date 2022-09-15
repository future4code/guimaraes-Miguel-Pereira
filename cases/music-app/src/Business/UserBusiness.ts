import { UserDatabase } from "../Database/UserDatabase";
import { User, UserInputDTO, UserRole } from "../Models/User";
import IdGenerator from "../Services/GeneratorId";
import { CustomError } from "../Errors/CustomError";
import Authenticator from "../Services/Authenticator";
import HashPassword from "../Services/HashPassword";
import { InvalidEmail, ShortName } from "../Errors/SignupErrors";

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

            if(role !== "ADMIN" && role !== "USER"){
                role = UserRole.USER
            };

            if(!email.includes("@")){
                throw new InvalidEmail();
            };

            if(name.length < 4){
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

            const token = authenticator.generateToken({id, role});

            return token;
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    };
}