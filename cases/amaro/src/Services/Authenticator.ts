import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../Model/AuthenticationData";

export default class Authenticator {
    generateToken = (payload: AuthenticationData): string => {
        const token = jwt.sign(
            payload, 
            process.env.JWT_KEY as string, 
            {
            expiresIn: process.env.ACCESS_TOKEN_TIME
            }
        );

        return token;
    };

    getTokenData = (token: string): AuthenticationData => {
        const result = jwt.verify(
            token, 
            process.env.JWT_KEY as string) as AuthenticationData;

        return result;
    };
};