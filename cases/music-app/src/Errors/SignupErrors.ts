import { CustomError } from "./CustomError";

export class ShortName extends CustomError {
    constructor()
    {
        super(406, "O nome deve conter pelo menos 4 caractéres.")
    }
};

export class InvalidEmail extends CustomError {
    constructor(){
        super(406, 'É obrigatório conter "@" no email.')
    }
};

export class EmptyParams extends CustomError {
    constructor(){
        super(401, "Os campos (name, email, password) são obrigatórios.")
    }
};