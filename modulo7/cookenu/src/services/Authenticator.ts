import * as jwt from "jsonwebtoken";
import { AuthenticatorData } from "../model/Authenticator";
import { Unauthorized } from "../error/UserErrors";

export class Authenticator {
    generateToken = ({id}: AuthenticatorData): string => {
        const token = jwt.sign(
            {id},
            process.env.JWT_KEY as string,
            {expiresIn: process.env.JWT_DURATION as string}
        )
        return token
    }

    getTokenData = (token: string): AuthenticatorData => {
        try {
            const payload = jwt.verify(
                token, 
                process.env.JWT_KEY as string) as AuthenticatorData
                return payload
        } catch (error: any) {
            throw new Unauthorized();
            
        }
    }
}