import { UserDatabase } from "../data/UserDatabase";
import { User, UserInputDTO } from "../model/UserModel";
import { GenerateId } from "../services/GenerateId";
import { CustomError } from "../error/CustomError";
import { 
    InvalidEmail, 
    InvalidSinup, 
    ExistingEmail, 
    UserNotFound, 
    ShortName} from "../error/UserErrors";
import { Authenticator } from "../services/Authenticator";

const idGenerator = new GenerateId();
const authenticator = new Authenticator()

export class UserBusiness {

    public signup = async (input: UserInputDTO) => {
        try {
            
            const {name, email, password} = input

            const id: string = idGenerator.generateId()

            if(!email || !name || !password){
                throw new InvalidSinup();
            };
            if(!email.includes("@")){
                throw new InvalidEmail();
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
    }
}