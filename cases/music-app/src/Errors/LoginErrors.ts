import { CustomError } from "./CustomError";

export class InvalidLogin extends CustomError {
    constructor(){
        super(401, "Os campos (email, password) são obrigatórios.")
    }
};

export class InvalidEmail extends CustomError {
    constructor(){
        super(404, "Email inválido ou não cadastrado.")
    }
};

export class InvalidPassword extends CustomError {
    constructor(){
        super(404, "Senha inválida.")
    }
};