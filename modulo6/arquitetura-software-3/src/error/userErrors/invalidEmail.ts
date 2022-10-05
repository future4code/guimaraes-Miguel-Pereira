import { CustomError } from "../customError";

export class InvalidEmail extends CustomError {
    constructor () {
        super("O email deve possuir '@'.", 406)
    }
}