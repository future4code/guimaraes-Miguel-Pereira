import { v4 } from "uuid";

export default class IdGenerator {
    generateId = () => {
        return v4()
    };
};