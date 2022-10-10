import { CustomError } from "./CustomError";

export class ProductNotFound extends CustomError{
    constructor(){
        super(404, "Nenhum produto encontrado!")
    }
};

export class InvalidParams extends CustomError{
    constructor(){
        super(422, "Algum campo obrigatório está vazio!")
    }
};

export class ShortName extends CustomError{
    constructor(){
        super(406, "Nome muito curto! Min. 4 caracteres.")
    }
}