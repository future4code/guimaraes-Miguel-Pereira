import { UserDatabase } from "../data/UserDatabase";
import { User, UserInputDTO } from "../model/UserModel";
import { GenerateId } from "../services/GenerateId";
import { CustomError } from "../error/CustomError";
import { 
    InvalidEmail, 
    InvalidSignup, 
    ExistingEmail, 
    UserNotFound, 
    ShortName,
    IncorrectEmail,
    InvalidPassword} from "../error/UserErrors";
import { Authenticator } from "../services/Authenticator";

const idGenerator = new GenerateId();
const authenticator = new Authenticator()

export class UserBusiness {

    public signup = async (input: UserInputDTO): Promise<string> => {
        try {
            
            const {name, email, password} = input

            const id: string = idGenerator.generateId()

            if(!email || !name || !password){
                throw new InvalidSignup();
            };
            if(!email.includes("@")){
                throw new IncorrectEmail();
            };
            if(name.length < 4){
                throw new ShortName();
            };

            let user: User = {
                id,
                name,
                email,
                password
            }
            const userDatabase = new UserDatabase()
            await userDatabase.create(user);

            const token = authenticator.generateToken({ id })
            return token
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    };

    public login = async (input: any): Promise<string> => {
        try {
            const {email, password} = input;
        
            if(!email || !password){
                throw new InvalidSignup();
            };
            if(!email.includes("@")){
                throw new InvalidEmail();
            };

            const userDatabase = new UserDatabase();
            const user = await userDatabase.findUserByEmail(email);

            if(!user){
                throw new InvalidEmail();
            };
            if(user.password !== password){
                throw new InvalidPassword();
            };
            // if(user.email !== email){
                
            // };


            const id = user.id
            const token = authenticator.generateToken({ id })
            return token
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
}