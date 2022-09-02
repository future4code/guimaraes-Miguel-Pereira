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

    private userDB: UserDatabase
    constructor(){
        this.userDB = new UserDatabase();
    }
    
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

            await this.userDB.create(user)
    
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

            const user = await this.userDB.findUserByEmail(email);

            if(!user){
                throw new InvalidEmail();
            };
            if(user.password !== password){
                throw new InvalidPassword();
            };

            const id = user.id
            const token = authenticator.generateToken({ id })
           
            return token
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    };

    public getCurrentProfile = async (input: any): Promise<any> => {
        try {
            const tokenData = authenticator.getTokenData(input)
            const user = await this.userDB.getProfileById(tokenData.id)

            if(!user){
                throw new UserNotFound();
            }

            return user
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    };

    public getProfileById = async (input: any): Promise<any> => {
        try {
            const {id, token} = input

            const profile = await this.userDB.getProfileById(id)
            const tokenData = authenticator.getTokenData(token)
            const userExists = await this.userDB.findUserById(input.id)
            const profileExists = await this.userDB.getProfileById(tokenData.id)

            if(!profileExists){
                throw new UserNotFound();
            }
            if(!userExists){
                throw new UserNotFound();
            }
            if(!profile){
                throw new UserNotFound();
            }

            return profile
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
}