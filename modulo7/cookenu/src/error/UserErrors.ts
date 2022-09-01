import { CustomError } from "./CustomError";

export class InvalidSinup extends CustomError {
    constructor() {
        super(422, "Um ou mais parâmetros vazios / incorretos!")
    }
};

export class ExistingEmail extends CustomError {
    constructor(){
        super(409, "Email já cadastrado!")
    }
};

export class UserNotFound extends CustomError {
    constructor(){
        super(404, "Usuário não encontrado!")
    }
};

export class InvalidEmail extends CustomError {
    constructor(){
        super(422, "O email deve conter @!")
    }
};

export class ShortName extends CustomError {
    constructor(){
        super(406, "O nome deve ter no mín. 4 caracteres!")
    }
};