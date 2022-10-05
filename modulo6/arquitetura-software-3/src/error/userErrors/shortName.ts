import { CustomError } from "../customError";

export class ShortName extends CustomError {
    constructor() {
        super("O nome deve ter no mínimo 4 caracteres.", 401)
    }
}