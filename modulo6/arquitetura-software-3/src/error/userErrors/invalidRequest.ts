import { CustomError } from "../customError";

export class InvalidRequest extends CustomError{
    constructor(){
        super("Requisição inválida! Um ou mais parâmetros vazios.", 400)
    }
}