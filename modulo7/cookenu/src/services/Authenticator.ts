import * as jwt from "jsonwebtoken";
import { AuthenticatorData } from "../model/Authenticator";

export class Authenticator {
    generateToken = ({id}: AuthenticatorData) => {
        const token = jwt.sign(
            {id},
            process.env.JWT_KEY as string,
            {expiresIn: process.env.JWT_DURATION as string}
        )
        return token
    }

    getTokenData = (token: string): AuthenticatorData => {
        const payload = jwt.verify(token, process.env.JWT_KEY as string) as AuthenticatorData
        return payload
    }
}