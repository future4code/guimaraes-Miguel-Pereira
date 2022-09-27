import { CustomError } from "./CustomError";

export class EmptyParams extends CustomError {
    constructor(){
        super(401, "Algum campo obrigatório está vazio.")
    }
};

export class InvalidAuthorization extends CustomError {
    constructor(){
        super(401, "Acesso não autorizado")
    }
};

export class UserNotFound extends CustomError {
    constructor(){
        super(404, "Usuário não encontrado.")
    }
};