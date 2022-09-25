import { CustomError } from "./CustomError"

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

export class ShortName extends CustomError {
    constructor()
    {
        super(406, "O nome deve conter pelo menos 4 caractéres.")
    }
};

export class InvalidEmailFeature extends CustomError {
    constructor(){
        super(412, 'É obrigatório conter "@" no email.')
    }
};

export class EmptyParams extends CustomError {
    constructor(){
        super(401, "Os campos (name, email, password) são obrigatórios.")
    }
};

export class EmailAlreadExistis extends CustomError {
    constructor(){
        super(409,"Email já cadastrado.")
    }
};

export class InvalidAuthorization extends CustomError {
    constructor(){
        super(401, "Acesso não autorizado")
    }
};

export class UserNotFound extends CustomError {
    constructor(){
        super(404, "Usuário não encontrado")
    }
};